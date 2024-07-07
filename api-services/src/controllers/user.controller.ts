import { Request, Response } from "express";
import { getRepository } from "typeorm"
import { User } from "../entities/user.entities"
import { UserService } from "../services/user.service";
import { AppDataSource } from "../data-source";
import { UserAlreadyExistsError } from "../errors/useralreadyexistserror";
import { UUID } from "crypto";

export class UserController {
    
    private userService = new UserService();

    async getUsers (req: Request, res: Response) {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();
    
        res.json(users);
    };

    async getUserById(req: Request, res: Response) {
        const userId = req.params.id;
    
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({id: userId as UUID});
    
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    }

    async createNewUser(req: Request, res: Response): Promise<Response> {
        const { name, email, password, authType } = req.body;

        try {
            const user = await this.userService.createUser(name, email, password, authType);

            return res.status(201).json({
                success: true,
                message: 'User created successfully',
                user: user
            })
        } catch (error) {
            if(error instanceof UserAlreadyExistsError){
                return res.status(409).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error - ' + error });
        }
    }

    async updateUserInfos(req: Request, res: Response){
        
        const { id, name, email } = req.body;

        if(!email){
            return res.status(500).json({message: 'Email is Not Valid!'})
        }

        if(!name){
            return res.status(500).json({message: 'Name Is Not Valid"'})
        }

        try {
            const user = await this.userService.updateUser(id, name, email);

            return res.status(201).json({
                success: true,
                message: 'User Informations Updated',
                user: user
            })
        } catch (error) {
            if(error instanceof UserAlreadyExistsError){
                return res.status(409).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error - ' + error });
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        try {
            const user = await this.userService.authenticateUser(email, password);
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}
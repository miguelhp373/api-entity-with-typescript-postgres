import { Request, Response } from "express";
import { getRepository } from "typeorm"
import { User } from "../entities/user.entities"
import { UserService } from "../services/user.service";
import { AppDataSource } from "../data-source";
import { UserAlreadyExistsError } from "../errors/useralreadyexistserror";

export class UserController {
    private userService = new UserService();

    async getUsers (req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    
    res.json(users);
};

    async register(req: Request, res: Response): Promise<Response> {
        const { name, email, password, authType } = req.body;

        try {
            const user = await this.userService.createUser(name, email, password, authType);
            //return res.status(201).json(user);
            return res.status(201).json({
                success: true,
                message: 'User created successfully',
                user: user // Aqui você pode retornar o novo usuário criado se desejar
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
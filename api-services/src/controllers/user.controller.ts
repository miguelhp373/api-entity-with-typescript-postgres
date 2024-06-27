import { Request, Response } from "express";
import { getRepository } from "typeorm"
import { User } from "../entity/user.entities"
import { UserService } from "../services/user.service";
import { AppDataSource } from "../services/data-source.service";

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
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ message: error });
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

    // Outros métodos como login, etc.
}
import { getRepository } from 'typeorm';
import { User } from '../entities/user.entities';
import * as bcrypt from 'bcrypt';
import { AppDataSource } from '../data-source';
import { UserAlreadyExistsError } from '../errors/useralreadyexistserror';

export class UserService {

    private userRepository = AppDataSource.getRepository(User);

    async createUser(name: string, email: string, password: string, authType: string): Promise<User> {
        
        const userExists = await this.userRepository.findOne({where : {email}});

        if(userExists){
            throw new UserAlreadyExistsError('O Usuário Já Existe!');
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;
        user.authType = authType;

        return this.userRepository.save(user);
    }

    async authenticateUser(email: string, password: string): Promise<User | null> {
        
        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return null;
        }

        return user;
    }

    // Outros métodos
}

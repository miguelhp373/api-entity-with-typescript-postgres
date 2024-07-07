import { getRepository } from 'typeorm';
import { User } from '../entities/user.entities';
import * as bcrypt from 'bcrypt';
import { AppDataSource } from '../data-source';
import { UserAlreadyExistsError } from '../errors/useralreadyexistserror';
import { UUID } from 'crypto';
import { UserNotExistsError } from '../errors/usernotexistserror';

enum ErrorCode {
    USER_NOT_FOUND = 1001,
    INVALID_USER_ID_FORMAT = 1002,
    INTERNAL_SERVER_ERROR = 1003,
    // Adicione mais códigos conforme necessário
}
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


    async updateUser(id: string, name: string, email: string): Promise<User> {
                
        const userBody = await this.userRepository.findOneBy({id: id as UUID});

        if(!userBody){
            throw new UserNotExistsError(`${ErrorCode.USER_NOT_FOUND.toString()} - Error on Try Update User Informations!`);
        }

        userBody.name = name;
        userBody.email = email;        

        return this.userRepository.save(userBody);
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

}

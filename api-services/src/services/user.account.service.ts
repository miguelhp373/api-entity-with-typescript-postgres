import { getRepository } from 'typeorm';
import { UserAccounts } from '../entities/user.accounts.entites';
import { AppDataSource } from '../data-source';
import { UserAlreadyExistsError } from '../errors/useralreadyexistserror';
import { UserAccountInterface } from '../interfaces/user.account.interface';

export class UserAccountService {

    private userAccounRepository = AppDataSource.getRepository(UserAccounts);

    async createAccount(account : UserAccountInterface): Promise<UserAccounts> {
        
        const userAccount = new UserAccounts(account)
    
        return this.userAccounRepository.save(userAccount);
    }

}

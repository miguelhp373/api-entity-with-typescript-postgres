import { AppDataSource } from "../data-source";
import { UserTransactions } from "../entities/user.transactions.entities";
import { UserTransactionsInterface } from "../interfaces/user.transaction.interface";

export class UserTransactionService{

    private userTransactionRepository = AppDataSource.getRepository(UserTransactions);

    async createTransaction(transaction : UserTransactionsInterface): Promise<UserTransactions> {
        
        const userTransaction = new UserTransactions(transaction)
    
        return this.userTransactionRepository.save(userTransaction);
    }

}
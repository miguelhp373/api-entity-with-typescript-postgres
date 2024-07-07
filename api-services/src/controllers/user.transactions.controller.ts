import { timeStamp } from "console";
import { UserAccountInterface } from "../interfaces/user.account.interface";
import { UserTransactionsInterface } from "../interfaces/user.transaction.interface";
import { UserTransactionService } from "../services/user.transaction.service";
import { Request, Response } from "express";

export class UserTransactionsController{

    async createNewTransaction(req: Request, res: Response): Promise<Response> {
        const { userId, accountId, transactionType, value, timeStamp, category, isPayed, installments } : UserTransactionsInterface = req.body;
    
        //const _timeStamp = new Date(Date.now());

        try {
            const userTransactionService = new UserTransactionService();
            
            const newUserTransaction = await userTransactionService.createTransaction({
                userId: userId,
                accountId: accountId,
                transactionType: transactionType,
                value: value,
                timeStamp : timeStamp,
                category: category,
                isPayed: isPayed,
                installments: installments
            });
        
            return res.status(201).json({
                success: true,
                message: 'Transaction successfully',
                transaction: newUserTransaction
            });
        } catch (error) {            
            return res.status(500).json({ message: 'Internal server error - ' + error });
        }
    }

}
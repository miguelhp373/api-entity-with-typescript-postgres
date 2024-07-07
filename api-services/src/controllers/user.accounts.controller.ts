import { Request, Response } from "express";
import { SvgBankIconsService } from "../services/svg-bank-icons.service";
import { AccountAlreadyExistsError } from "../errors/accountreadyexistserror";
import { UserAccountService } from "../services/user.account.service";
import { UserAccountInterface } from "../interfaces/user.account.interface";
import { UUID } from "crypto";

export class UserAccountsController {

    async getBankIconsAll(req: Request, res: Response): Promise<Response> {        
        try {
            const service = new SvgBankIconsService();
            const mainIcons = await service.getMainIconsFromJson('svg-bank-icons.json');
        
            return res.status(200).json(mainIcons);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getBankIconsById(req: Request, res: Response): Promise<Response> {        
        try {
            const service = new SvgBankIconsService();
            const filterIconById = (await service.getMainIconsFromJson('svg-bank-icons.json')).filter(item => item.id == Number(req.params.id))
        
            return res.status(200).json(filterIconById);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async registerNewAccount(req: Request, res: Response): Promise<Response> {
        const { userId, accountType, accountName, accountIcon, accountBalance, showOnDashBoard }: UserAccountInterface = req.body;
    
        try {
            const userAccountService = new UserAccountService();
            const newUserAccount = await userAccountService.createAccount({
                userId: userId,
                accountType: accountType,
                accountName: accountName,
                accountIcon: accountIcon,
                accountBalance: accountBalance,
                showOnDashBoard: showOnDashBoard
            });
        
            return res.status(201).json({
                success: true,
                message: 'User Account created successfully',
                account: newUserAccount
            });
        } catch (error) {
            if (error instanceof AccountAlreadyExistsError) {
                return res.status(409).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error - ' + error });
        }
    }
    
}

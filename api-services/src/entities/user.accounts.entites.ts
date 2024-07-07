import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserAccountInterface } from "../interfaces/user.account.interface";

@Entity()
export class UserAccounts {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'uuid'})
    userId: string;

    @Column('varchar')
    accountType: string;

    @Column('varchar')
    accountName: string;

    @Column({type: 'int', nullable: true})
    accountIcon: number;

    @Column({ type: 'float', default: 0 })
    accountBalance: number;

    @Column({ type: 'bool', default: true })
    showOnDashBoard: boolean;

    constructor(accountData?: UserAccountInterface) {
        if (accountData) {
            this.userId = accountData.userId;
            this.accountType = accountData.accountType;
            this.accountName = accountData.accountName;
            this.accountIcon = accountData.accountIcon || 0;
            this.accountBalance = accountData.accountBalance || 0;
            this.showOnDashBoard = accountData.showOnDashBoard !== undefined ? accountData.showOnDashBoard : true;
        }
    }
}
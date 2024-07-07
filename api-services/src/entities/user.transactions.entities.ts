import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";
import { UserTransactionsInterface } from "../interfaces/user.transaction.interface";

@Entity()
export class UserTransactions {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'uuid'})
    userId: string;

    @Column({type: 'uuid'})
    accountId: string;

    @Column('varchar')
    transactionType: string;

    @Column('float')
    value: Number;

    @Column({type: 'timestamp'})
    timeStamp: Timestamp;

    @Column({ type: 'varchar' })
    category: String;

    @Column({ type: 'bool', default: true })
    isPayed: boolean;

    @Column({ type: 'int', default: 1 })
    installments: number;

    constructor(transactionData?: UserTransactionsInterface) {
        if (transactionData) {            
            this.userId = transactionData.userId;
            this.accountId = transactionData.accountId;
            this.transactionType = transactionData.transactionType;
            this.value = transactionData.value;
            this.timeStamp = transactionData.timeStamp ?? new Date(Date.now())
            this.category = transactionData.category;
            this.isPayed = transactionData.isPayed ?? true;
            this.installments = transactionData.installments;            
        }
    }
}
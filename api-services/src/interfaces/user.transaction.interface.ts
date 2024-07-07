import { UUID } from "crypto";
import { Timestamp } from "typeorm";

export interface UserTransactionsInterface {
    id?: UUID;
    userId: UUID;
    accountId: UUID;
    transactionType: string;
    value: Number;
    timeStamp : Timestamp;
    category: String;
    isPayed: boolean;
    installments: number;   
}

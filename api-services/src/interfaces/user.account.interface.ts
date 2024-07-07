import { UUID } from "crypto";

export interface UserAccountInterface {
    accountId?: UUID;
    userId: UUID;
    accountType: string;
    accountName: string;
    accountIcon: number; // Opcional
    accountBalance?: number; // Opcional
    showOnDashBoard?: boolean; // Opcional
}

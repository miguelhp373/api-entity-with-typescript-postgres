export interface UserAccountInterface {
    userEmail: string;
    accountType: string;
    accountName: string;
    accountIcon: number; // Opcional
    accountBalance?: number; // Opcional
    showOnDashBoard?: boolean; // Opcional
}

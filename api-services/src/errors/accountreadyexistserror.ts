export class AccountAlreadyExistsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AccountAlreadyExistsError';
    }
}
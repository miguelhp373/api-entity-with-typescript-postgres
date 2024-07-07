export class UserNotExistsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UserNotExistsError';
    }
}
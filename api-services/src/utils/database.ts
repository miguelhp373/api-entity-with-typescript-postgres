import { config } from './config';

class PostgresConnectionStringBuilder {
    private host: string;
    private port: string;
    private user: string;
    private password: string;
    private database: string;

    constructor() {
        this.host = config.host || '';
        this.port = config.port || '';
        this.user = config.user || '';
        this.password = config.password || '';
        this.database = config.database || '';
    }

    public buildConnectionString(): string {
        if (!this.host || !this.port || !this.user || !this.password || !this.database) {
            throw new Error('Missing database connection information');
        }

        return `postgresql://${this.user}:${this.password}@${this.host}:${this.port}/${this.database}`;
    }
}

export default PostgresConnectionStringBuilder;

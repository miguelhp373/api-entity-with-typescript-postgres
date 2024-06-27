"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
class PostgresConnectionStringBuilder {
    constructor() {
        this.host = config_1.config.host || '';
        this.port = config_1.config.port || '';
        this.user = config_1.config.user || '';
        this.password = config_1.config.password || '';
        this.database = config_1.config.database || '';
    }
    buildConnectionString() {
        if (!this.host || !this.port || !this.user || !this.password || !this.database) {
            throw new Error('Missing database connection information');
        }
        return `postgresql://${this.user}:${this.password}@${this.host}:${this.port}/${this.database}`;
    }
}
exports.default = PostgresConnectionStringBuilder;

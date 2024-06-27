import postgres from 'postgres';
import "reflect-metadata";
import PostgresConnectionStringBuilder from '../utils/database';

const connectionStringBuilder = new PostgresConnectionStringBuilder();
const connectionString = connectionStringBuilder.buildConnectionString();
    
export const sql = postgres(connectionString);
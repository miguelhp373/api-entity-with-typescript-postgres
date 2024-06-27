import 'reflect-metadata';
import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { User } from '../entity/user.entities';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    //url: process.env.DATABASE_URL,
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT!) || 5432,
    username: process.env.DB_USERNAME || "test",
    password: process.env.DB_PASSWORD || "test",
    database: process.env.DB_DATABASE || "test",
    synchronize: true,
    logging: true,
    entities: [User], // Adicionando a entidade User
    subscribers: [],
    migrations: [],
});
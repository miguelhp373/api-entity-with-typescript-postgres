import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';

// Obter o diretório atual do arquivo
const currentDir = path.resolve(process.cwd(), 'dist');

const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: port,
  username: process.env.DB_USERNAME || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'database',
  synchronize: false,

  entities: [`${currentDir}/entities/*.{ts,js}`],
  migrations: [`${currentDir}/migrations/*.{ts,js}`],
});

import { ConnectionOptions } from 'typeorm';
import PostgresConnectionStringBuilder from './src/utils/database';
import { sql } from './src/utils/postgres'; // Importe a classe correta

// Construa sua string de conexão usando a classe PostgresConnectionStringBuilder
const connectionStringBuilder = new PostgresConnectionStringBuilder();
const connectionString = connectionStringBuilder.buildConnectionString();

const config: ConnectionOptions = {
    type: 'postgres',
    url: connectionString, // Use a string de conexão aqui
    entities: [__dirname + '/**/*.entity.ts'], // Caminho para suas entidades TypeORM
    migrations: [__dirname + '/migrations/*.ts'], // Caminho para suas migrações TypeORM
    cli: {
        migrationsDir: 'migrations', // Diretório para gerar novas migrações
    },
    synchronize: false, // Desative em produção; mantenha como false em produção para evitar sincronização automática de esquemas
};

export = config;

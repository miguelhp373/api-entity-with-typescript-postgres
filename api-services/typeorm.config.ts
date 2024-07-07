import { ConnectionOptions } from 'typeorm';
import PostgresConnectionStringBuilder from './src/utils/database';

const connectionStringBuilder = new PostgresConnectionStringBuilder();
const connectionString = connectionStringBuilder.buildConnectionString();

console.log('jubileu')
console.log(__dirname);

const config: ConnectionOptions = {
    type: 'postgres',
    url: connectionString, // Use a string de conexão aqui
    entities: [__dirname + '/**/*.entities.js'], // Caminho para suas entidades TypeORM
    migrations: [__dirname + '/migrations/*.js'], // Caminho para suas migrações TypeORM
    cli: {
        migrationsDir: 'migrations', // Diretório para gerar novas migrações
    },
    synchronize: false, // Desative em produção; mantenha como false em produção para evitar sincronização automática de esquemas
};

export = config;

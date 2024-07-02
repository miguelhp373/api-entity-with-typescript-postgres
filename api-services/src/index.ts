import 'reflect-metadata';
import express from 'express';
import { createConnection, DataSource } from "typeorm";
import dotenv from 'dotenv';
import routes from './routes/index';
import { AppDataSource } from './data-source'

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);


AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));        
    })
    .catch((error) => console.log("Database connection error:", error));
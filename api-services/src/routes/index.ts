import { Router, Request, Response } from "express";
import { apiKeyMiddleware } from "../middleware/middleware";
import cors from 'cors';
import userRoutes from "./user.routes";
import userAccountsRoutes from "./user.accounts.routes";

const routes = Router();

const corsMiddleware = cors({
  origin: '*', // Define a origem permitida (todos os domínios)
  credentials: true, // Permite o uso de cookies e cabeçalhos de autorização com HTTPS
  allowedHeaders: 'Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale', // Define os cabeçalhos permitidos
  methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS' // Define os métodos permitidos
});

routes.use(corsMiddleware);
routes.use(apiKeyMiddleware);

routes.use('/users', userRoutes);
routes.use('/users/accounts', userAccountsRoutes);
routes.get('/ping', (req: Request, res: Response) => res.status(200).json({ message: "pong" }));

routes.use((req: Request, res: Response) => res.status(404).json({ message: "Path Not Found! Try Another Path" }));

export default routes;

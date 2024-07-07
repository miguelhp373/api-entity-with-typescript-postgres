import { Router } from "express";
import { UserTransactionsController } from "../controllers/user.transactions.controller";

const router = Router();
const userTransactionsController = new UserTransactionsController();

router.post('/create', (req, res) => userTransactionsController.createNewTransaction(req, res));

export default router;

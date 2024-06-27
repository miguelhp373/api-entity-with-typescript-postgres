import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

// Funções de middleware que chamam os métodos do controller
router.get('/', (req, res) => userController.getUsers(req, res));
router.post('/', (req, res) => userController.register(req, res));

export default router;

import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

// Funções de middleware que chamam os métodos do controller
router.get('/all', (req, res) => userController.getUsers(req, res));
router.get('/id/:id', (req, res) => userController.getUserById(req, res));
router.post('/create', (req, res) => userController.createNewUser(req, res));
router.patch('/edit', (req, res) => userController.updateUserInfos(req, res));

export default router;

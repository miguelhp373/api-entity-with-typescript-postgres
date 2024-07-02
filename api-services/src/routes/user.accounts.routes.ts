import { Router } from "express";
import { UserAccountsController } from "../controllers/user.accounts.controller";

const router = Router();
const userAccountsController = new UserAccountsController();

router.get('/bank/icons', (req, res) => userAccountsController.getBankIconsAll(req, res));
router.get('/bank/icons/:id', (req, res) => userAccountsController.getBankIconsById(req, res));
router.post('/new/account', (req, res) => userAccountsController.registerNewAccount(req, res));

export default router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
const userController = new user_controller_1.UserController();
// Funções de middleware que chamam os métodos do controller
router.get('/', (req, res) => userController.getUsers(req, res));
router.post('/', (req, res) => userController.register(req, res));
exports.default = router;

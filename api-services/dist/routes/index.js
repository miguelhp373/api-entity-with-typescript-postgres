"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const routes = (0, express_1.Router)();
const cors = require('cors');
const corsMiddleware = cors({
    origin: '*', // Define a origem permitida (todos os domínios)
    credentials: true, // Permite o uso de cookies e cabeçalhos de autorização com HTTPS
    allowedHeaders: 'Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale', // Define os cabeçalhos permitidos
    methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS' // Define os métodos permitidos
});
routes.use(corsMiddleware);
routes.use('/users', user_routes_1.default);
routes.get('/ping', (req, res) => res.status(200).json({ message: "pong" })),
    routes.use((req, res) => res.status(404).json({ message: "Path Not Found! Try Another Path" }));
exports.default = routes;

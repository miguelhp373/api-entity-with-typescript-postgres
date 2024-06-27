"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = void 0;
const postgres_1 = __importDefault(require("postgres"));
require("reflect-metadata");
const database_1 = __importDefault(require("../utils/database"));
const connectionStringBuilder = new database_1.default();
const connectionString = connectionStringBuilder.buildConnectionString();
exports.sql = (0, postgres_1.default)(connectionString);

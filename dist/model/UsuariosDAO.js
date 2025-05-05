"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_1 = __importDefault(require("./DAO"));
class UsuariosDAO extends DAO_1.default {
    constructor() {
        super('usuarios');
    }
}
exports.default = UsuariosDAO;

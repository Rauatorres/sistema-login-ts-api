"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const UsuariosDAO_1 = __importDefault(require("../../model/UsuariosDAO"));
class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
        this.UsuariosDAO = new UsuariosDAO_1.default();
    }
    usuarioExiste() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioProcurado = yield this.UsuariosDAO.find({ nome: this.nome });
            if ('nome' in usuarioProcurado) {
                return true;
            }
            return false;
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioExiste = yield this.usuarioExiste();
            const senhaHash = (0, crypto_1.createHash)('md5').update(this.senha).digest('hex');
            if (!usuarioExiste) {
                return { success: false, msg: 'Usuário não encontrado.' };
            }
            const usuarioLogin = yield this.UsuariosDAO.find({ nome: this.nome, senha: senhaHash });
            if (!('senha' in usuarioLogin) || senhaHash != usuarioLogin.senha) {
                return { success: false, msg: 'Senha incorreta.' };
            }
            return { success: true, msg: 'Usuário logado com sucesso!' };
        });
    }
    cadastrar() {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado;
            const usuarioExiste = yield this.usuarioExiste();
            const senhaHash = (0, crypto_1.createHash)('md5').update(this.senha).digest('hex');
            if (usuarioExiste) {
                resultado = { success: false, msg: `O usuário de nome '${this.nome}' já existe!` };
            }
            else {
                yield this.UsuariosDAO.insert({ nome: this.nome, senha: senhaHash });
                resultado = { success: true, msg: 'Usuário cadastrado com sucesso!' };
            }
            return resultado;
        });
    }
}
exports.default = Usuario;

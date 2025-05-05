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
exports.login = exports.cadastrar = void 0;
const parseRequestBody_1 = __importDefault(require("./parseRequestBody"));
const Usuario_1 = __importDefault(require("./classes/Usuario"));
const login = (_server, request, _reply) => __awaiter(void 0, void 0, void 0, function* () {
    const requestBody = (0, parseRequestBody_1.default)(request.body, ['nome', 'senha']);
    if ('erro' in requestBody) {
        return requestBody.erro;
    }
    const usuario = new Usuario_1.default(requestBody.nome, requestBody.senha);
    return yield usuario.login();
});
exports.login = login;
const cadastrar = (_server, request, _reply) => __awaiter(void 0, void 0, void 0, function* () {
    const requestBody = (0, parseRequestBody_1.default)(request.body, ['nome', 'senha']);
    if ('erro' in requestBody) {
        return requestBody.erro;
    }
    const usuario = new Usuario_1.default(requestBody.nome, requestBody.senha);
    return yield usuario.cadastrar();
});
exports.cadastrar = cadastrar;

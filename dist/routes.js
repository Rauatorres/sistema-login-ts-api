"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./controller/usuario");
const routes = (server) => {
    server.get('/', (_request, _reply) => {
        return 'Olá Mundo!';
    });
    server.post('/cadastrar', (request, reply) => {
        return (0, usuario_1.cadastrar)(server, request, reply);
    });
    server.post('/login', (request, reply) => {
        return (0, usuario_1.login)(server, request, reply);
    });
};
exports.default = routes;

import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { cadastrar, login } from "./controller/usuario";

const routes = (server: FastifyInstance) => {
    server.get('/', (_request: FastifyRequest, _reply: FastifyReply) => {
        return 'Olá Mundo!';
    });
    
    server.post('/cadastrar', (request: FastifyRequest, reply: FastifyReply) => {
        return cadastrar(server, request, reply);
    });

    server.post('/login', (request: FastifyRequest, reply: FastifyReply) => {
        return login(server, request, reply);
    });
}

export default routes;
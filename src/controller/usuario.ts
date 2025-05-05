import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import parseRequestBody from "./parseRequestBody";
import Usuario from "./classes/Usuario";

const login = async (_server: FastifyInstance, request: FastifyRequest, _reply: FastifyReply) => {
    const requestBody = parseRequestBody(request.body, ['nome', 'senha']);

    if('erro' in requestBody){
        return requestBody.erro;
    }

    const usuario = new Usuario(requestBody.nome, requestBody.senha);

    return await usuario.login();
};

const cadastrar = async (_server: FastifyInstance, request: FastifyRequest, _reply: FastifyReply) => {
    const requestBody = parseRequestBody(request.body, ['nome', 'senha']);

    if('erro' in requestBody){
        return requestBody.erro;
    }

    const usuario = new Usuario(requestBody.nome, requestBody.senha);

    return await usuario.cadastrar();
};

export { cadastrar, login };
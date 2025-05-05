"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const formbody_1 = __importDefault(require("@fastify/formbody"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const cors_1 = __importDefault(require("@fastify/cors"));
const routes_1 = __importDefault(require("./routes"));
const server = (0, fastify_1.default)({ logger: false });
server.register(formbody_1.default);
server.register(multipart_1.default);
server.register(routes_1.default);
server.register(cors_1.default, {
    origin: "http://localhost:5173"
});
server.listen({ port: 3000 }, (err, adress) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${adress} ...`);
});

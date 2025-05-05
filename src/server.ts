import Fastify from 'fastify';
import Formbody from '@fastify/formbody';
import Multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import routes from './routes';

const server = Fastify({ logger: false });

server.register(Formbody);
server.register(Multipart);
server.register(routes);
server.register(cors, {
    origin: "http://localhost:5173"
})

server.listen({ port: 3000 }, (err, adress) => {
    if(err){
        server.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${adress} ...`);
});
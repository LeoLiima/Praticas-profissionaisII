import fastify from 'fastify';
import fastifyStatic from '@fastify/static'; // Importe o novo plugin
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtenho o caminho do diretório atual para construir caminhos de arquivos
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = fastify();

// Registrando o novo plugin @fastify/static
server.register(fastifyStatic, {
  root: __dirname, 
  prefix: '/static/', // Prefixo da URL para arquivos estáticos
});

server.get('/cadastro', (request, reply) => {
    console.log('deu certo cadastro')
    reply.sendFile('cadastro/cadastro.html'); 
});


server.get('/login', (request, reply) => {
    console.log('deu certo login')
    reply.sendFile('login/login.html'); 
});

server.listen({
    port: 3333
})

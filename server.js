const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger : {
        info: { title: 'fastify-api '}
    }
})
fastify.register(require('./routes/items'))
const PORT = 5000;

const start = async () => {
    try{
        await fastify.listen({ port: PORT})
    }catch(e){
        fastify.log.error(e)
    }
}

start();
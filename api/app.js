const fastify = require('fastify')({ logger: false })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world123' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
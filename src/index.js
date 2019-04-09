const express = require('express')

const server = require('./apollo/server')

const port = process.env.PORT || 4000

const app = express()
server.applyMiddleware({ app })

app.get('/api', (req, res) => res.send({api: true}))

app.listen({ port }, () => {
  console.log(`server ready on port ${port} @ /api and @ ${server.graphqlPath}`)
})

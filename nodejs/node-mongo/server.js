const express = require('express')
const server = express()
const routes = require('./routes_mongoose').routes
const parser = require('body-parser')

const PORT = 1200

server.use(parser.json())

server.get('/status',(req,res)=>{
    res.send(
        {
            message : 'Server is Running'
        }
    )
})

server.use('/org',routes)

server.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})

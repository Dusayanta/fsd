const express = require('express')
const server = express()
const routes = require('./routes_mongoose').routes
const parser = require('body-parser')

const PORT = 4200

server.use(parser.json())

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

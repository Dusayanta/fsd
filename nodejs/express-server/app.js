const express = require('express')
const data = require('./data')

const server = express()
const PORT = 5600

server.get('/status',(req,res)=>{
    res.send('Server is Running')
})

server.listen(PORT,()=>{
    console.log('Server started successfully')
})
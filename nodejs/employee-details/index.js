const express = require('express')
const server = express()
const parser = require('body-parser')
let data = require('./data')
let controlData = require('./controlData')

server.use(parser.json())
const PORT = 1200

server.get('/',(req,res)=>{
    res.send(`Server is running`)
});
server.get('/employees',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.send(data.employees)
});
server.get('/project',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.send(data.projectList)
});
server.get('/employeesByProjectID/:projectID',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.send(controlData.getEmpByProjectID(data.employees,data.projectList,parseInt(req.params.projectID)))
});
server.get('/employeesByProject',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.send(controlData.getEmpByProject(data.employees,data.projectList));
});

server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})
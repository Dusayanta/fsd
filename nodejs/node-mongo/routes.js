const express = require('express')
const routes = express.Router()
const dao = require('./dao')

routes.get('/projects',(rq,rs)=>{
    dao.getProjects((err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data"
            })
        }else{
            rs.status(200).send(data)
        }
    })
})

routes.post('/projects/add',(rq,rs)=>{
    dao.addProjects(rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(201).send(data)
        }
    })
})

routes.post('/projects/emp/add/:id',(rq,rs)=>{
    dao.updateEMp(parseInt(rq.params.id),rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(201).send(data)
        }
    })
})
routes.delete('/projects/emp/delete/:pid/:eid',(rq,rs)=>{
    dao.delEmpById(parseInt(rq.params.pid),parseInt(rq.params.eid),(err)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(200).send({
                message : "Employee Deleted"
            })
        }
    })
})
module.exports={
    routes
}
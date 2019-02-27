const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/organization')

// const Employee = new mongoose.Schema({
//     _id : mongoose.SchemaTypes.Number,
//     name : mongoose.SchemaTypes.String,
//     salary : mongoose.SchemaTypes.Number
// });

const ProjectSchema = new mongoose.Schema({
    _id : mongoose.SchemaTypes.Number,
    name : mongoose.SchemaTypes.String,
    email : mongoose.SchemaTypes.String
});

const Project = mongoose.model('project',ProjectSchema);

const getProjects = (callback)=>{
    Project.find({},{__v:0},(err,data)=>{
        callback(err,data)
    })
 }
const addProjects = (data,callback)=>{
    const prj = new Project({
         _id: data._id,
         name : data.name,
         email: data.email
     })
     Project.create(prj,(err)=>{
         callback(err,{
             message : "Project Added successfully"
         })
     })
 }
const addEmpToProjectByProjectId = (pid,data,callback)=>{
    Project.updateOne({_id:pid},{$addToSet:{emps:data}},(err,data)=>{
        callback(err,{
            message: "Employee added to project successfully"
        })
    })
}
const delEmpById = (pid,eid,callback)=>{
    Project.updateOne({_id: pid},{$pull : {emps : {_id: eid}}},(err)=>{
        callback(err)
    })
}
 module.exports={
     getProjects,
     addProjects,
     addEmpToProjectByProjectId,
     delEmpById
 }
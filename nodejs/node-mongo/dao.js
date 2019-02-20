const MongoClient = require('mongodb').MongoClient
const _url = 'mongodb://localhost:27017'
const _db = 'organization'

const getProjects = (callback)=>{
    // Step 1: connect to mongo server
    MongoClient.connect(_url,(err,conn)=>{
        console.log('Connected to Mongo Server')
        // Step 2: connect to data base
        // Step 3: fetch all documents from the collections
        conn.db(_db).collection('projects').find({},{fields:{ _id:0}}).toArray((err,emps)=>{
            // callback function to handle async flow 
            callback(err,{
                projects : emps
            })
        })
        // close the connection
        conn.close()
    })
}
const addProjects  = (emp,callback)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('projects').insertOne(emp,(err)=>{
            callback(err,{
                message : 'Project Added'
            })
        })
        // close the connection
        conn.close()
    })
}

const getEmpByProjectId  = (id,callback)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('projects').find({_id:id},{fields:{ _id:0,emps:1}}).toArray((err,emps)=>{
            // callback function to handle async flow 
            callback(err,emps)
        })
        // close the connection
        conn.close()
    })
}
const updateEMp= (id,emp,callback)=>{
   // addEmpToProjects(id,(err,_emps)=>{
     //   _emps.push(emp)
        MongoClient.connect(_url,(err,conn)=>{
            conn.db(_db).collection('projects').update({_id:id},{$addToSet:{emps:emp}},(err)=>{
                callback(err,{
                    message : 'Employee Added To Project'
                })
            })
            // close the connection
            conn.close()
        })
    //})
}
const delEmpById= (pid,eid,callback)=>{
     getEmpByProjectId(pid,(err,_emps)=>{
         let empObj = _emps[0].emps;
         console.log(empObj);
         empObj.forEach((e,index)=>{
             if(e._id == eid){
             empObj.splice(index,1);
             }
         })
         MongoClient.connect(_url,(err,conn)=>{
            conn.db(_db).collection('projects').update({_id:pid},{$set:{emps:empObj}},(err)=>{
                callback(err,{
                    message : 'Employee Deleted From Project'
                })
            })
            // close the connection
            conn.close()
        })
     })
 }
module.exports={
    getProjects,
    addProjects,
    updateEMp,
    delEmpById
}
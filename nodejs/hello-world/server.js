const http = require('http')
const date = require('./myDate')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.write(`The curent date and time is : ${date.myDateTime()}`);
    res.end();
})
server.listen(1200,()=>{
    console.log('Server is started')
})
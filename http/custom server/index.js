// importing http module 
const http = require('node:http');
//creating a server and defining the functionality
const server= http.createServer(function (req,res){
    // handling the request 
    console.log(`incoming request at [${Date.now()}]`);
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url); //return the path of url like /contact-us / about etc
    // handling response 
   // res.writeHead(200); // in node you can send one header for one request this doesnt work beacuse if default path hit you already send 200 status code and now you are trying agin to send a header which is against the node 
    // task to handle request based on the url 
    switch(req.url){
        case '/':
            res.writeHead(200);
            return res.end("Homepage");
        case '/contact-us':
            res.writeHead(200);
            return res.end("contact me at my gmail");
        case '/about':
            res.writeHead(200);
            return res.end("i am a student");
        default:
            res.writeHead(404);
            return res.end("wrong page requested"); 
    }
    // res.end(`hey , you can accept ${req.headers['accept-language']}`); // bracket notation [ ] instead of dot beacuse the name contain - which confuses js 
});

server.listen(8080,()=>{
    console.log("i am listening ")

})
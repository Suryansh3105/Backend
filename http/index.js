const http = require('node:http') // build in module in node to create http server 


// creating a server

const server = http.createServer((req, res)=>{ // cretae Server take a function and that function has two parameters req object and res object all the data related to resquest incoming is stored in req object and same with the res object
    // handling the req 
    console.log("incoming request");
    // all db operation , validation etc are performed on the request here 

    // handing response 

res.writeHead(200); // used to send header in the response this can include status code status message and different headers
res.end("thanks for visiting my server"); // ends the response and send the final data without it client will keep waiting for the response to end so basically it tell node the response is complete 
});

// making the created server listen for request on particular port

server.listen(8000,()=>{
    console.log("hi");
})
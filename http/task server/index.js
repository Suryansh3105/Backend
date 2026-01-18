const http =require("node:http");

const tweets= [
    {
        name:"surya",
        message:"hello world"
    },
     {
        name:"pandey",
        message:"hello world pandey"
    }
]

const server=http.createServer(function (req,res){
    // handling request
    console.log(req.method);
    console.log(req.url);
    // handing respone
        if(req.url=='/'&& req.method=='GET'){
            res.writeHead(200);
            res.end("Hello welcome to my server");
            
        }
        else if(req.url=='/contact-us'&& req.method=='GET'){
            res.writeHead(200);
            res.end("email: email.com phone number : 123456789");
            
        }
        else if(req.url=='/tweet'&& req.method=='POST'){
            res.writeHead(201);
            res.end("DB operation done");
            
        }
         else if(req.url=='/tweet'&& req.method=='GET'){
            res.writeHead(200);
            res.end(tweets);
            
        }
        else{
            res.writeHead(404);
            res.end("wrong page requested");
        }
        
    }
);

server.listen(8000,()=>{
    console.log("i am listening at port 8000")
})
const http =require("node:http");
// got logging we will use fs module 
const fs=require('node:fs');



// my attempt
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

// const server=http.createServer(function (req,res){
//     // handling request
//    console.log(req.method); console.log(req.url);
//     // handing respone
//         if(req.url=='/'&& req.method=='GET'){
//             res.writeHead(200);
//             res.end("Hello welcome to my server");
            
//         }
//         else if(req.url=='/contact-us'&& req.method=='GET'){
//             res.writeHead(200);
//             res.end("email: email.com phone number : 123456789");
            
//         }
//         else if(req.url=='/tweet'&& req.method=='POST'){
//             res.writeHead(201);
//             res.end("DB operation done");
            
//         }
//          else if(req.url=='/tweet'&& req.method=='GET'){
//             res.writeHead(200);
//             res.end(tweets); // this give the erro due res.end can only take strings,buffer , unit8array you are trying to send js array of object solution convert it string through JSON.stringify(variableName);
            
//         }
//         else{
//             res.writeHead(404);
//             res.end("wrong page requested");
//         }
        
//     }
// );

// improving through learning 

const server=http.createServer(function (req,res){
    // handling request
    const method=req.method;
    const path=req.url;
    const log=`[${Date.now()} : ${method} , ${path}] \n`;
    fs.appendFile('log.txt',log,'utf-8',(err)=>{
        console.log(err);
    });
    // handing respone
    switch(method){
        case 'GET':{
            switch(path){
                case '/':
                    res.writeHead(200).end("Hello welcome to my server"); break;
                case '/contact-us':
                     res.writeHead(200).end("email: email.com phone number : 123456789"); break;
                case '/tweet': res.writeHead(200).end(JSON.stringify(tweets)); break;
                default:{res.writeHead(404).end("wrong path request")

        }
            }

        }break;
        case 'POST':{
            switch(path){
                case '/tweet':
                    res.writeHead(201).end("DB operation done"); break;
                default:{res.writeHead(404).end("wrong path request")

        }
            }

        }break;
        default:{
            res.writeHead(404).end("wrong path request");

        }
    }
        
        
    }
);

server.listen(8000,()=>{
    console.log("i am listening at port 8000")
})
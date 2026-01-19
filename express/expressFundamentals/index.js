//creating express app
// requiring express 
const express=require('express');
// once express usper is loaded into the express variable now we create the server using it
const app=express();

// defining route 
app.get('/',(req,res)=>{
    res.end("welcome to my express app"); // by deault exprees send 200 status code to send another code use . status(codeNumber) on res
})

//listening for the request 
app.listen(8000,()=>{
    console.log("i am listening");
})
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

// task api project in express

app.get('/contact-us',(req,res)=>{
    res.end("my email is email.com and phone number is 1234567891");
})

app.post('/tweet',(req,res)=>{
    res.status(201).end("DB operation compelted");
})
app.get('/tweet',(req,res)=>{
    res.json(tweets);
})


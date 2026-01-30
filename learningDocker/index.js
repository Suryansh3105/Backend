import express from 'express';
const PORT = process.env.PORT ?? 8000;
const app = express();

app.get("/",(req,res)=>{
    return res.json({
        status:"success",
        message:"    Hello from express server",
    })
})

app.get('/health',(req,res)=>{
    return res.json({message:`health is good`});
})

app.listen(PORT,()=>{
    console.log("i am listening")
})
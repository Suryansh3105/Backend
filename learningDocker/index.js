import express from 'express';
const PORT = 8000;
const app = express();

app.get("/",(req,res)=>{
    return res.json({
        status:"success",
        message:"    Hello from express server",
    })
})

app.listen(PORT,()=>{
    console.log("i am listening")
})
import express from 'express'

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/",(req,res)=>{
    res.end(`hello world`);
})

app.listen(PORT,()=>{
    console.log(`i am listening on port : ${PORT}`)
})
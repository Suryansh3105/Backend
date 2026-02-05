import 'dotenv/config';
import express from 'express';
import userRoute from './routes/user.routes.js'
import db from './db/index.js'
import { userSession, usersTable } from './model/user.model.js';
import { eq } from 'drizzle-orm';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(async function(req,res,next){
    // recceving the token from the header //typical authorization header is Bearer <token>
    const tokenHeader = req.headers['authorization'];

    if(!tokenHeader){
        return next();
    }

    if(!tokenHeader.startsWith('Bearer')){
        res.status(400).json({error:"token header missing"})
    }
    const jwtVerify = jwt.verify(jwt,process.env.SECRET);
    req.user=data;
    next();
})



app.use('/users',userRoute)

app.listen(PORT,()=>{
    console.log(`i am listening on the port: ${PORT}`)
})
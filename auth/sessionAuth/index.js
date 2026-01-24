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
    const sessionId = req.headers['session-id'];
    console.log(sessionId);
    if(!sessionId){
        return next();
    }
    const [data] = await db.select({id:userSession.id,userId:userSession.userID,name:usersTable.name,email:usersTable.email}).from(userSession).rightJoin(usersTable,eq(usersTable.id,userSession.userID)).where((table)=>eq(table.id,sessionId));
    console.log(data);
    if(!data){
        return next()
    }
    
    req.user=data;
    next();
})



app.use('/users',userRoute)

app.listen(PORT,()=>{
    console.log(`i am listening on the port: ${PORT}`)
})
import { userSession, usersTable } from "../model/user.model.js";
import db from '../db/index.js'
import { createHmac, randomBytes } from "crypto";
import {eq} from 'drizzle-orm'


async function userSignup(req,res){
    const {name,email,password} = req.body;
    const [existingUser] = await db.select({email:usersTable.email}).from(usersTable).where((table)=>eq(table.email,email));
    console.log(existingUser);
    if(existingUser){ // since select() returns arrray of object so even if user dont exist it return empty array of object and in js [] or [{}] is always true so even if user dosent exist the if condition becomes true so if you are using if condition then descrtucing is imp note if user dont exist and we are destructing first element so  existingUser becomes undefined and undefined in js is false other you can also check for arrat length is existingUser.length > 0
        return res.status(400).json(`user already exist`);
    }
    
    const salt = randomBytes(256).toString('hex');
    const hashedPassword = createHmac('sha256',salt).update(password).digest('hex');
    const newUser = await db.insert(usersTable)
    .values({name,email,password : hashedPassword,salt})
    .returning({id:usersTable.id});
    return res.status(201).json(`user register succefully with id ${newUser[0].id}`)
}

async function userLogin(req,res){
    const {email,password} =req.body;
    const [userInfo] = await db.select({
        id:usersTable.id,
        email:usersTable.email,
        hashPassword:usersTable.password,
        salt:usersTable.salt
    }).from(usersTable).where((table)=>eq(table.email,email))
    console.log(userInfo);
    if(!userInfo){
        return res.status(400).json({error:`user doesnt exist please login first`})
    }
    const hashedPassword=createHmac('sha256',userInfo.salt).update(password).digest('hex');
    console.log(hashedPassword)
    console.log(userInfo.hashPassword)
    if(hashedPassword === userInfo.hashPassword){
        // generate a session 
        const [session]= await db.insert(userSession).values({userID:userInfo.id}).returning({sessionId:userSession.id});
        console.log(session);
        return res.status(200).json({message:`you are loged in ${userInfo.email} with id ${session.sessionId}`});
    }
    else{
        return res.status(401).json({error:`wrong password`});
    }

}

export default {
    userSignup,
    userLogin
}
require('dotenv/config')
const {db}= require('./db')
const { userTable } = require('./drizzle/schema')

async function getAllUser(){
    const users = await db.select().from(userTable);
    console.log(`users in db`,users);
    return users;
}

async function createUser({id,name,emial}){
    await db.insert(userTable).values({
        id,
        name,
        emial,
    });

}
 

// 

getAllUser();
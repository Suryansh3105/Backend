const {drizzle}=require('drizzle-orm/node-postgres') // importing drizzle 

const db = drizzle(process.env.DATABASE_URL) // connecting with the db this connection is done through a connection string whose format is postgres://username:password@host:port/db_name

module.exports={db};
# project flow

# 1-basic stepup

1) install dependencies 
@types/ node and express -D
express
dot env 
2) define port variable in .env
3) boilerplate code in index.js 
example: 
import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/',(req,res)=>{
    res.end('hello world');
})

app.listen(PORT,()=>{
    console.log(`i am listening on the port: ${PORT}`)
})
4) configuring script 
start : node index.js
dev : node -- watch index.js 
type : module
5) npm dev to check basics are setup 

# 2-Database setup with docker 

1) create folder db inside db 2 files 
schema.js - for storing the schema 
index.js - for db connection
2) install database 
pnpm add drizzle-orm pg
pnpm add -D drizzle-kit tsx @types/pg
3) setup docker envirnoment for DB
create docker-compose.js in root folder
and setup up docker services for db 
4) setup a connection varaible in .env 
DATABASE_URL = postgresql://user:password@host:port/dbname
5)  connect drizzle to db 
go in db/index.js
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
const db = drizzle(process.env.DATABASE_URL);
6) create a table in db/schema.js
7) in root create drizzle.config.js
8) apply the changes through
npx drizzle-kit push


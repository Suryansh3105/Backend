# config drizzle

1. install drizzle orm , postgres , drizzle kit
npm i drizzle-orm pg
npm i drizzle-kit @types/pg -d

2. setup connection variable 
intall dotenv npm i dotenv
create .env file in .env file 
DATAbase_URL = 

3. connection with the DB in index.js file in src
import {drizzle}
const db= drizzle(connection variable); // process.env.DATABASE_URL

4. create a table in src/db
schema creation 
eg:
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

5. setup config file usiong defineConfig
import {defineConfig}
const config = defineConfig({
    dialect :,
    out:,
    schema:,
    dbCredentials:{
        url:
    },
})

6. apply changes to db
use command npx drizzle-kit push

7. fake data to Seed and Query the database
require('dotenv/config) // to require superpower of dotenv and config to search for .env file and read the data in it at the start of the file note this only required once in the main file starting point of the app
in index.js file in root folder note this is separate index.js file that of src 

8. run the index.js to check if all things are working as expected 

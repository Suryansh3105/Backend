const {integer, varchar, pgTable} = require('drizzle-orm/pg-core');

const userTable=pgTable("users",{               // this is how you create a table pgTable is imported and used to create a postgre table it take two input 1) name of table as string "" 2) a object what specify the schema of the table 
    id: integer().primaryKey(),
    name:varchar({length:255}).notNull(),
    emial:varchar({length:255}).unique(),
})

module.exports = {userTable};
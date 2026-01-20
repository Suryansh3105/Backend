const {defineConfig} = require('drizzle-kit');

const config = defineConfig({
    dialect:'postgresql', // telling drizzle which db i gonna use 
    out: './drizzle', // telling drizzle where shoudld you store sql migration : database dont understand js so drzzile convert js to sql and store that sql somewhere and re run it safely later this somewhere is out
    schema:'./drizzle/schema.js', // teling drizzle where the schema are stored it act a single source of truth for db structure 
    dbCredentials:{ //contain credential for connection to db
        url:process.env.DATABASE_URL,
    },
});

module.exports = config;
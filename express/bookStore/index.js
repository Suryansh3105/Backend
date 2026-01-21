require('dotenv/config');
const express=require('express');
const {myLogger}=require('./middlewares/logger.js');
const bookRouter = require('./Routes/book.route.js');

const app = express();

const PORT=8000;

app.use(myLogger); // when using custom middleware pass the function dont call it myLogger() immedaity call the the function since request has not been send so req is undefined and gives error rather pass the function name only 
app.use(express.json()); // but her used () before express.json is factory middleware i.e. a function that return a middleware fucntion 
// so If your function RETURNS a function → use () If it IS a just a function → don’t use ()
// so function is return something then use () otherwise dont why you one failed beacuse your function doesnt return anything when js immeaditaly excutes the body the result comes as undefined and hence giving the error




// Routes
 app.use('/books',bookRouter);


app.listen(PORT,()=>{
    console.log(`i am listening at port :${PORT}`)
})
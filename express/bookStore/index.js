const express=require('express');

const app = express();

const PORT=8000;

app.use(express.json());

// in memory DB - breaking statelessnes rule but only due to we dont have DB for now once we have it we will remove it  
const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
];

// Routes
// get route to fetch all books

app.get('/books',(req,res)=>{
    res.setHeader('x-Surya','suryansh'); // setHeader used to set custom header it take two input 1-headerName 2- content of header usally when its a custom header we write headerName X-headerName
    res.json(books);
})

// fetching book by id

app.get('/books/:id',(req,res)=>{
   
    const id=parseInt(req.params.id); // id is form of string so '1' was being compared with numberic 1 therefore when using number always convert params to integer
    if(isNaN(id)){ // NaN is the only value in JS that is not equal to itself. so id==NaN will not work and always give false therefore use isNaN() 
        res.status(400).json({errro:`enter id in numbers`});
    }
    const book = books.find((e)=>e.id===id); // .find() is method in array to search and return one item(fist match) if codnition is true it take a callback function that take array on which the searching is to be performed if not found it return undefined //SELECT * from books where id = {id}
    console.log(book);
    console.log(`id: ${id}`);
    if(!book){
        res.status(404).json({error:`book not exist`});
    }
    return res.status(200).json(book);

})

// route adding a book

app.post('/books',(req,res)=>{
    const {title,author}=req.body;
    if(!title || title === ''){
        res.status(400).json({error:`title and author are compulsory`})
    }
    if(!author || author === ''){
        res.status(400).json({error:`title and author are compulsory`})
    }

    const newID=books.length+1;

    const book ={ 
        id: newID,
        title: title,
        author: author
    }
    books.push(book);

    res.status(200).json(book);
})

// route to delete a book

app.delete('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
        res.status(400).json({error:`the id should be numberic`});
    }
    const bookID=books.findIndex((e)=>{
        return e.id===id; // when using {} return is compulsory
    })
    console.log(bookID);
    if(bookID < 0){
        return res.status(400).json({error:`book with id : ${id} does not exist`})
    }
    books.splice(bookID,1);
    return res.status(200).json({message:`book deleted`});
})



app.listen(PORT,()=>{
    console.log(`i am listening at port :${PORT}`)
})
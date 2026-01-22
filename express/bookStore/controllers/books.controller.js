//const books=require('../models/books.model.js');
const booksTable = require('../models/books.model.js');
const db = require('../db');
const {eq,sql} = require('drizzle-orm');
const authorTable = require('../models/author.model.js');



async function getAllBooks (req,res){
    res.setHeader('x-Surya','suryansh');
    const search = req.query.search;
    if(search){
        const books = await db.select().from(booksTable).where(sql`to_tsvector('english',${booksTable.title}) @@ to_tsquery('english',${search})`);
        return res.json(books);
    }
    const books = await db.select().from(booksTable) // setHeader used to set custom header it take two input 1-headerName 2- content of header usally when its a custom header we write headerName X-headerName
    res.json(books);
}

async function findBookByID (req,res) {
   
    const id=req.params.id; // id is form of string so '1' was being compared with numberic 1 therefore when using number always convert params to integer
    // if(isNaN(id)){ // NaN is the only value in JS that is not equal to itself. so id==NaN will not work and always give false therefore use isNaN() 
    //     return res.status(400).json({errro:`enter id in numbers`});
    // }
    const book = await db.select().from(booksTable).where(eq(booksTable.id,id)).leftJoin(authorTable,eq(booksTable.authorID,authorTable.id));//books.find((e)=>e.id===id); // .find() is method in array to search and return one item(fist match) if codnition is true it take a callback function that take array on which the searching is to be performed if not found it return undefined //SELECT * from books where id = {id}
    console.log(book);
    console.log(`id: ${id}`);
    if(book.length===0){
        res.status(404).json({error:`book not exist`});
    }
    return res.status(200).json(book);

};

async function createBook(req,res){
    const {title,description,authorID}=req.body;
    if(!title || title === ''){
        return res.status(400).json({error:`title and author are compulsory`})
    }
    if(!authorID || authorID === ''){
        return res.status(400).json({error:`title and author are compulsory`})
    }

    // const newID=uuid();
    const book = await db.insert(booksTable).values({title:title,description:description,authorID :authorID}).returning();
    // const book ={ 
    //     id: newID,
    //     title: title,
    //     author: author
    // }
    // books.push(book);

    res.status(201).json(book);
};

async function deleteBookByID (req,res){
    const id=req.params.id;
    console.log(id);
    // if(isNaN(id)){
    //     res.status(400).json({error:`the id should be numberic`});
    // }
    // const bookID=books.findIndex((e)=>{
    //     return e.id===id; // when using {} return is compulsory
    // })
    const result = await db.delete(booksTable).where(eq(booksTable.id,id)).returning();
    if(result === 0){
        return res.status(404).json({error:"book not found"});
    }
    return res.status(200).json({message:"book delete successfully"});
    // console.log(bookID);
    // if(bookID < 0){
    //     return res.status(400).json({error:`book with id : ${id} does not exist`})
    // }
    // books.splice(bookID,1);
    // return res.status(200).json({message:`book deleted`});
};

module.exports={
    getAllBooks,
    findBookByID,
    deleteBookByID,
    createBook,
}


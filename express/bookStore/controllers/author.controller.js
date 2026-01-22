const authorTable = require('../models/author.model');
const db =require('../db');
const {eq} =require('drizzle-orm');
const booksTable = require('../models/books.model');

async function getAllAuthor(req,res){
    const authors = await db.select().from(authorTable); // returns an array
    return res.status(200).json(authors);
}

async function getAuthorByID(req,res){
    const id=req.params.id;
    const author = await db.select().from(authorTable).where(eq(authorTable.id,id)).limit(1); // returns an array
    if(author.length===0){
        return res.status(400).json(`author does not exist`);
    }
    return res.status(200).json(author);
}

async function createAuthor(req,res){
    const {firstName,lastName,email}=req.body;
    const author = await db.insert(authorTable).values({firstName,lastName,email}).returning({id:authorTable.id,firstName:authorTable.firstName})
    res.status(201).json(author);
}

async function deleteAuthorByID(req,res){
    const id = req.params.id
    const authorID=await db.delete(authorTable).where(eq(authorTable.id,id)).returning({id:authorTable.id});
    res.status(200).json(`author of id : ${authorID[0]?.id} is deleted succesfully`);
}

async function allBookOfAuthor(req,res){
    const id = req.params.id;
    const book = await db.select().from(booksTable).where(eq(booksTable.authorID,id));
    res.status(200).json(book);
}


module.exports={
    getAllAuthor,
    getAuthorByID,
    createAuthor,
    deleteAuthorByID,
    allBookOfAuthor
}
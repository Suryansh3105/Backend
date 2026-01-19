const express =require('express'); // importing express 
const router=express.Router(); // create router var to have feature of express Router
const controller = require('../controllers/books.controller');

// get route to fetch all books
router.get('/',controller.getAllBooks)

// fetching book by id

router.get('/:id',controller.findBookByID);

// route adding a book

router.post('/',controller.createBook);

// route to delete a book

router.delete('/:id',controller.deleteBookByID)

module.exports = router;


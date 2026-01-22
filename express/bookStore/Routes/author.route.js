const express =require('express');
const router=express.Router(); 
const controller = require('../controllers/author.controller');

router.get('/',controller.getAllAuthor);

router.get('/:id',controller.getAuthorByID);

router.post('/',controller.createAuthor);

router.delete('/:id',controller.deleteAuthorByID);

router.get('/:id/books',controller.allBookOfAuthor);

module.exports = router;
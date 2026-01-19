# project initialization 

1. folder for bookstore project 
2. initialize npm 
3. install devdependencies and dependencies
4. create index.js file and step as entry point and define script for running it 

# setup basic express

1. require express
2. create express app (server)
3. set up the port varaible 
4. listen to that port

# mock data of array

const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
];

# get route to fetch all the book in json format 
define route - app.get('/books')
send book data - res.json(books);
send custom header surya - suryansh 

# fetch book by id 

1. use path parameter /books/:id, : is used define parameter in url id i varaible it can be anything abc 
2. retrive book id and convert to int as the id is form of string
3. handle bad request through isNaN() as only numeric value allowed for book id 
4. find book using book.find()
5. handle not found - 404 response 
6. return the book if found 

# setup POST Route to add a new book

1. use middleware to parse the body from request using app.use(express.json());
2. define POST route and get title and author from body
3. validation to check for title and author 
4. generate new id for book
5. create new book and add to array
6. send a successs response

# delete route for books 

1. define delet e route app.delete('/books/:id')
2. get id of book from parameter and convert it to ineger
3. handle bad request : if id NaN check uisng is NaN
4. find the book and remove the book using .findIndex and splice method or using filter()
5. if not found the handle throught 404 response 

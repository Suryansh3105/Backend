// in memory DB - breaking statelessnes rule but only due to we dont have DB for now once we have it we will remove it  
const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
];

module.exports = books;
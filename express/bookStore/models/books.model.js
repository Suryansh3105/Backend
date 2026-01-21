// // in memory DB - breaking statelessnes rule but only due to we dont have DB for now once we have it we will remove it  
// const books = [
//   { id: 1, title: 'Book One', author: 'Author One' },
//   { id: 2, title: 'Book Two', author: 'Author Two' },
// ];

// module.exports = books;

const { pgTable , uuid , text , varchar, index} = require('drizzle-orm/pg-core');
const {sql} =require('drizzle-orm');
const authorTable = require('./author.model');

const booksTable =pgTable("books",{
  // id title description authorid
  id: uuid().primaryKey().defaultRandom(), //type.characteristic().characteristic()
  title: varchar({ length: 100}).notNull(),
  description:text(), // type text is by default has huge length and by default is nullable
  authorID : uuid().references(()=> authorTable.id),
},(table)=>[
  index('indexOnTitle').using('gin',sql`to_tsvector('english',${table.title})`)
])

module.exports = booksTable;
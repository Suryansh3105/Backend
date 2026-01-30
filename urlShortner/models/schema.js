import { pgTable, varchar , uuid} from "drizzle-orm/pg-core";

export const exampleTable = pgTable('ex1',{
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({length:255}).notNull()
});

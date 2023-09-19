import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log('Tabela apagada!')
// })

// sql`
//   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
// `.then(() => {
//   console.log('Extensão `uuid-ossp` criada!')
// })

sql`
  CREATE TABLE videos (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log('Tabela criada!')
})

const pg = require('pg');
const connectionString =  'postgresql://bridget:password123@localhost:5432/Budget';
// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE test(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });
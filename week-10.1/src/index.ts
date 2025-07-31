
import { Client } from 'pg'
 
const client = new Client({
  connectionString :"postgresql://postgres:mysecretpassword@localhost:5432/postgres"
})

client.connect()

async function createUserTable(){
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}

async function insertUserTable(username : string,user_email:string,pass:string){
    const client = new Client( "postgresql://postgres:mysecretpassword@localhost:5432/postgres");

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3);";
    const values = [username,user_email,pass];
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}




//createUserTable();
insertUserTable("user1","user1@gmail.com","user1@123").catch(console.error);
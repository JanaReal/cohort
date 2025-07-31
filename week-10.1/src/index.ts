
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
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username},${user_email},${pass}');`;
    const values = [username,user_email,pass];
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}



async function getUser(user_email:string){
    const client = new Client( "postgresql://postgres:mysecretpassword@localhost:5432/postgres");

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "SELECT * FROM Users WHERE email = $1;";
    const values = [user_email];
    const res = await client.query(insertQuery,values);

    if(res.rows.length > 0){
        console.log("userFound",res.rows[0]);
        return res.rows[0];
    }else{
        console.log("no uSEr found")
        return null;
    }
  } catch (err) {
    console.error('Error during the Read:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}


//createUserTable();
//insertUserTable(";DELETE * FROM Users;","user1@gmail.com","user1@123").catch(console.error);

getUser("user1@gmail.com");
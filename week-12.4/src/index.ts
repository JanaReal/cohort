import { Client } from 'pg';

const client = new Client({connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"});


async function createUserstable(){
    await client.connect();
    
    const result = await client.query(`
        CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    `)
    console.log(result);


    await client.end();
}


async function inputUsersTable(username: String, password: String,email:String) {
    await client.connect();
    const result = await client.query(`
        INSERT INTO users (username,password,email) VALUES ($1,$2,$3);
    `,[username,password,email]);
    console.log(result.detail);
    await client.end();
}

inputUsersTable("JANA","PASS","EMAIL");
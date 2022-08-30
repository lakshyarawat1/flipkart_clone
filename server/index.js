import express from 'express'
import env from 'dotenv'
import Connection from './database/db.js'

//my_app
const app = express();

// db_connection
Connection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on https://localhost:", PORT);
});

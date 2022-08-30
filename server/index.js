import express from 'express'
import env from 'dotenv'
import Connection from './database/db.js'
import defaultData from './default.js'
import router from './routes/route'

//my_app
const app = express();

// db_connection
Connection();

const PORT = process.env.PORT || 5000;

//routes
app.use('/', router)

app.listen(PORT, () => {
  console.log("Server is running on https://localhost:", PORT);
});

defaultData();
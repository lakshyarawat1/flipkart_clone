const express = require('express');
const env = require('dotenv')


const app = express();

PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('Server is running on https://localhost:', PORT);
})
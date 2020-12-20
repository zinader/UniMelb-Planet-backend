const cors = require('cors');
const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is running on Port : ${port}`)
})

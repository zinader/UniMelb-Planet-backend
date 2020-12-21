const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB connection successfullt estabilished")
})

const majorRouter = require('./routes/major');
const breadthRouter = require('./routes/breadth');
const electivesRouter = require('./routes/electives');

app.use('/Majors', majorRouter);
app.use('/Breadths', breadthRouter);
app.use('/Electives', electivesRouter);

app.listen(port, ()=>{
    console.log(`Server is running on Port : ${port}`)
})

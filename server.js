const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongoDB Atlas connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection to MongoDB Atlas is working!");
});

//Require Files for Routes
const studentsRouter = require('./routes/Students');

//Routes - will load all files in /* file
app.use('/students', studentsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//TEST
app.get('/', (req, res) => res.send('API Running'));

app.use('/api/students', require('./routes/api/students'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require('express');
const router = express.Router();

//Test Route
router.get('/', async (req, res) => res.send('Student Route'));

// Route to see All Students in Students Collection
// app.get('/all', async (req, res) => {
//     const students = await Student.find({}).limit(10)
//     res.send(students)
//   })

module.exports = router;
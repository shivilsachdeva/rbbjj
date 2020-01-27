const router = require('express').Router();
let Student = require('../models/Student.js');

//Handles incoming HTTP Requests 
router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add new student
//http://localhost:5000/students/addstudent
router.route('/addstudent').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const belt = req.body.belt; 
    const stripes = req.body.stripes;
    //const dateoflastpromotion = Date.parse(req.body.dateoflastpromotion);

        const newStudent = new Student({
            firstname,
            lastname,
            phonenumber,
            email,
            belt,
            stripes,
            //dateoflastpromotion
        });

        newStudent.save()
            .then(() => res.json('Student Added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });

// Route to see All Students in Students Collection
// app.get('/all', async (req, res) => {
//     const students = await Student.find({}).limit(10)
//     res.send(students)
//   })

module.exports = router;
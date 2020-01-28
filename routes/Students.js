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
    const dateoflastpromotion = (req.body.dateoflastpromotion).format('MM-DD-YYYY');

    const newStudent = new Student({
        firstname,
        lastname,
        phonenumber,
        email,
        belt,
        stripes,
        dateoflastpromotion
    });

    newStudent.save()
        .then(() => res.json('Student Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//find student by ID
//http://localhost:5000/students/id
router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
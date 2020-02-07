const router = require('express').Router();
let Class = require('../models/Class.js');

//Handles incoming HTTP Requests 
router.route('/').get((req, res) => {
    Class.find()
        .then(classes => res.json(classes))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add new class
//http://localhost:5000/class/addclass
router.route('/addclass').post((req, res) => {
    const title = req.body.title;
    const starttime = req.body.starttime;
    const endtime = req.body.endtime;
    const trainingtype = req.body.trainingtype;
    const days = req.body.days;

    const newClass = new Class({
        title,
        starttime,
        endtime,
        trainingtype,
        days,
    });

    newClass.save()
        .then(() => res.json('Class Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//find class by id
//http://localhost:5000/class/id
router.route('/:id').get((req, res) => {
    Class.findById(req.params.id)
        .then(classes => res.json(classes))
        .catch(err => res.status(400).json('Error: ' + err));
});

//find class by id AND Delete
//http://localhost:5000/class/id
router.route('/:id').delete((req, res) => {
    Class.findByIdAndDelete(req.params.id)
    .then(() => res.json('Class Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
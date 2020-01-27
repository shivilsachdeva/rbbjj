const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstname: String,
    lastname: String,
    phonenumber: {
        type: String,
        //unique: true,
        //match: [/^\(?[2-9]\d{2}[-)]?\d{3}-?\d{4}$/, "Please enter a ten-digit phone number"]

    },
    email: {
        type: String,
        //unique: true,
        //match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    // classes: {
    //     attended: [
    //         {
    //             type: Schema.Types.ObjectId,
    //             ref: "Attendance"
    //           }
    //     ],
    //     gi: {
    //         type: Number,
    //         default: 0
    //     },
    //     nogi: {
    //         type: Number,
    //         default: 0
    //     },
    //     kickboxing: {
    //         type: Number,
    //         default: 0
    //     }
    // },
    belt: {
        type: String,
        default: "white"
    },
    stripes: {
        type: Number,
        default: 0
    }
    //dateoflastpromotion: {
    //    type: Date,
    //}
});

//collection 'student' made from StudentSchema
const Student = mongoose.model('Student', StudentSchema);

//export
module.exports = Student;


const mongoose = require('mongoose');
const QArr = require('./QArr');

const QuizSchema = mongoose.Schema({
    date: {
        type: mongoose.Schema.Types.Date,
        required: true
    },

    timer: {
        type: Number,
        required: true,
    },
    start_time: {
        type: Number,
        required: true,
    },
    questions: {
        type: QArr.schema,
        required: true,
        default: new QArr()
    },

    course_id:{
    	type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    total_marks:{
    	type: Number,
        required: true,
    }
    ,
    weightage: {
        type: Number,
        required: true,
    },
    instruction: {
        type: String,
        required: true,
        default: ""
    }

});

module.exports = mongoose.model('Quiz', QuizSchema);
const mongoose = require('mongoose');
const QArr = require('./QArr');

const QuizSchema = mongoose.Schema({
    date: {
        type: mongoose.Schema.Types.Date,
        required: true
    },

    time: {
        type: Number,
        required: true,
    },

    questions: {
        type: QArr.schema,
        required: true,
        default: new QArr()
    },

    stat_id:{
    	type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    course_id:{
    	type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    total_marks:{
    	type: Number,
        required: true,
    }

});

module.exports = mongoose.model('Quiz', QuizSchema);
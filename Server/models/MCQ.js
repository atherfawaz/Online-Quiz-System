const mongoose = require('mongoose');

const MCQSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },

    choices: {
        type: Array,
        required: true,
    },

    correct: {
        type: Number,
        required: true,
    }
    ,
    marks: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('MCQ', MCQSchema);
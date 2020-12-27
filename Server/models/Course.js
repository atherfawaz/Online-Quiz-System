const mongoose = require('mongoose');
const QArr = require("./QArr");

const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    instructor: {
        type: String,
        required: true,
    },

    code: {
        type: String,
        required: true,
    },

    semester: {
        type: Number,
        required: true,
    },

    pool: {
        type: QArr.schema,
        required: true,
    },

    quiz: {
        type: Array,
        required: true,
        default: []
    }
});

module.exports = mongoose.model('Course', CourseSchema);
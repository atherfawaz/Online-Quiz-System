const mongoose = require('mongoose');

const LQSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },

    kewords: {
        type: Array,
        required: true,
    },

});

module.exports = mongoose.model('Question', LQSchema);
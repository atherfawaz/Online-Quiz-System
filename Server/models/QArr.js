const mongoose = require('mongoose');

const ArrSchema = mongoose.Schema({
    MCQ: {
        type: [],
        default: []
    },
    Long: {
        type: [],
        default: []
    },
    Short: {
        type: [],
        default: []
    }
});

module.exports = mongoose.model('QArr', ArrSchema);
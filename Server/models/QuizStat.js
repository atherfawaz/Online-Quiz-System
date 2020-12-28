const mongoose = require("mongoose");

const StatSchema = mongoose.Schema({
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    qid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    marks: {
        type:Array,
        require: true,
        default: []
    }
});

module.exports = mongoose.model("QuizStat", StatSchema);
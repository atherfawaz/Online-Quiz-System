const mongoose = require("mongoose");

const CMatchSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  statements: {
    type: Array,
    required: true,
  },

  answers: {
    type: Array,
    required: true,
  },

  correct: {
    type: Array,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CMatch", CMatchSchema);

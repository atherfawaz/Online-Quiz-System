const mongoose = require("mongoose");

const LQSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  keywords: {
    type: Array,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Question", LQSchema);

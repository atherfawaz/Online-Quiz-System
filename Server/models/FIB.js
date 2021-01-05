const mongoose = require("mongoose");

const FIBSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  answer: {
    type: String,
    required: true,
  },

  marks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("FIB", FIBSchema);

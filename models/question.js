const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  grade: { type: Number, required: true },
  skill: { type: String, required: true },
  choices: { type: String, required: true }
  
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

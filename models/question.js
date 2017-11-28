const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  grade: { type: Number, required: true },
  skill: { type: String, required: true },
  question: { type: String, required: true },
  choices: { type: Array, required: true },
  answer: { type: String, required: true },
  pointValue: { type: Number, required: true }
  
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

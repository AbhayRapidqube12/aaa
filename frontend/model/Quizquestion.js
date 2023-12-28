const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  options: [String],
  answer: String,
  hint: String,
  explanation: String,
});

const QuizSchema = new mongoose.Schema({
  subcategory: String,
  questions: [QuestionSchema],
});

const HistoryCategorySchema = new mongoose.Schema({
  Category:String,
  Quizzes: [QuizSchema],
});

// Create a Mongoose model using the defined schema
module.exports = mongoose.model('HistoryCategory',HistoryCategorySchema,'questions' );


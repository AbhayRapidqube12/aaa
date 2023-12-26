const History_Quiz = require('../model/Quizquestion');

const getHistoryQuizzes = async (req, res) => {
    try {
      const historyQuizzes = await History_Quiz.find();
      console.log(historyQuizzes)
      if (historyQuizzes.length > 0) {
        return res.status(200).json({ message: "History Quizzes Found", data: historyQuizzes });
      } else {
        return res.status(404).json({ message: "No history quizzes found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports = getHistoryQuizzes;

const History_Quiz = require('../model/Quizquestion');


const getHistoryQuizzes = async (req, res) => {
    try {
      const {category,subcategory} = req.body
      // const historyQuizzes = await History_Quiz.findOne({
      //   Category: Category,
      //   'Quizzes.subcategory': subcategory,
      // });
      const Quizzes = await History_Quiz.findOne({ category: category });

      if (Quizzes) {
      const matchedSubcategory = Quizzes.Quizzes.find(
        (quiz) => quiz.subcategory === subcategory
      );
      console.log(Quizzes)
      if (matchedSubcategory) {
        return res.status(200).json({ message: "History Quizzes Found", data: matchedSubcategory });
      } else {
        return res.status(404).json({ message: "No history quizzes found" });
      }}
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    };
  };

  module.exports = getHistoryQuizzes;

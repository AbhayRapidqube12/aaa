const Logged_user = require('../model/Logged_Model')
// const Loginschema = require('../model/Logged_Model');

const Loggeduser_Controller = async (req, res) => {
    try {
        const { questions = [], score, category, selectedAnswers = {}, email,subcategory } = req.body;

         // Assuming the user's email is available in req.user

        const user = await Logged_user.findOne({ email: email });

        if (user) {
            const newQuizHistoryEntry = {
                category: category,
                subcategory: subcategory, // Add the subcategory if available
                score: score,
                questions: questions.map(question => {  
                    return {
                        question: question.question,
                        selectedanswer: selectedAnswers[question.id], // Assuming selectedAnswers is an object mapping question IDs to selected answers
                        answer: question.answer,
                        // Assuming options are included in the request body
                    };
                }),
                favoriteQuizzes: [] // Initially empty, to be populated if needed
            };

            user.Quizhistory.push(newQuizHistoryEntry); // Push the new quiz history entry to the user's Quizhistory array
            await user.save();

            return res.status(200).json({ message: "Quiz history saved successfully" });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error controller" });
    }
};

module.exports = Loggeduser_Controller;

const Logged_user = require('../model/Logged_Model');

const Addtofav_Controller = async (req, res) => {
    const { category, subcategory ,email} = req.body;
    console.log(req.body)
    // Assuming you have some user identification information, like a user ID
    const userId = email; // Replace this with how you identify your users
    try {
        // Find the user by their ID
        const user = await Logged_user.findOne({email:userId});

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the category and subcategory combination already exists in favorites
        const exists = user.favoriteQuizzes.some(
            (quiz) => quiz.category === category && quiz.subcategory === subcategory
        );

        if (exists) {
            return res.status(400).json({ message: 'This favorite already exists' });
        }

        // If it doesn't exist, add it to the user's favoriteQuizzes array
        user.favoriteQuizzes.push({ category, subcategory });
        // Save the updated user data
        await user.save();

        return res.status(200).json({ message: 'Favorite added successfully' });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error });
        
    }
};

module.exports = Addtofav_Controller;

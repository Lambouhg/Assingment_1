const Question = require('../models/question');

// Create a new question
exports.createQuestion = async (req, res) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).json(question); // Respond with created status
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

// Delete a question by ID
exports.deleteQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        await Question.findByIdAndDelete(questionId);
        res.json({ message: 'Question deleted' });
    } catch (error) {
        res.status(404).json({ error: 'Question not found' });
    }
};

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

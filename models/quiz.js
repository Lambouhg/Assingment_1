const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }] // Trường questions là một mảng ObjectId tham chiếu tới model Question
});

// Đảm bảo rằng trường questions sẽ luôn là mảng rỗng nếu không có giá trị
quizSchema.pre('save', function(next) {
    if (!this.questions) {
        this.questions = [];
    }
    next();
});

module.exports = mongoose.model('Quiz', quizSchema);

const mongoose = require('mongoose');

const quizzSchema = new mongoose.Schema({
    questions: [{
        question: String,
        options: [String],
        correctAnswer: String
    }],
    answers: [String],
    score: Number,
    isFinished: Boolean
});

const QuizzMichaelJackson = mongoose.model('QuizzMichaelJackson', quizzSchema);

module.exports = QuizzMichaelJackson;

//Ce schéma utilise un tableau de questions, chacune avec une question, des options et une réponse correcte. Il y a également un tableau pour stocker les réponses données par l'utilisateur, un champ pour stocker le score et un champ pour indiquer si le quizz est terminé ou non.
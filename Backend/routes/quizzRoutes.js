const express = require('express');
const quizzSchema = require('../Models/quizzSchema');
const app = express();

// Définition de la route '/quizz'
// app.get('/quizz', (req, res) => {
//     // Récupération de la collection 'quizzMJ'
//     quizzSchema.find()
//         .then(data => {
//             console.log(data);
//             // Envoi des données récupérées en réponse à la requête
//             res.send(data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

app.get('/quizz', async (req, res) => {
    const quizzez = await quizzSchema.find();

    try {
        res.send(quizzez);
    } catch (err) {
        res.status(500).send(err);
    }
});

// ajout méthode POST
app.post('/quizz', async (req, res) => {
    const quizz = new quizzSchema(req.body);

    try {
        await quizz.save();
        res.send(quizz);
    } catch (err) {
        res.status(500).send(err);
    }
});

// ajout méthode Patch
app.patch('/quizz/:id', async (req, res) => {
    try {
        await quizzSchema.findByIdAndUpdate(req.params.id, req.body);
        await quizzSchema.save();
        res.send(quizz);
    } catch (err) {
        res.status(500).send(err);
    }
});



// ajout méthode DELETE
app.delete('/quizz/:id', async (req, res) => {
    try {
        const quizz = await quizzSchema.findByIdAndDelete(req.params.id)
        
        if (!quizz) res.status(404).send("No item found");
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err);
    }
});




module.exports = app;
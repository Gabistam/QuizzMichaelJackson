const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const result = dotenv.config();
const bodyParser = require('body-parser');
const cors = require('cors');

// mongodb+srv://<username>:<password>@cluster1.xw7jt7q.mongodb.net/test
// Connexion à MongoDB Atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware pour permettre les requêtes cross-origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Middleware pour parser le corps des requêtes
app.use(bodyParser.json());

// cors middleware
app.use(cors());
//definition des routes
app.get('/create', (req, res) => {
    res.send('Create Quizz');
});
app.get('/read', (req, res) => {
    res.send('Read Quizz');
});
app.get('/update', (req, res) => {
    res.send('Update Quizz');
});
app.get('/delete', (req, res) => {
    
    res.send('Delete Quizz');
});

// // Middleware pour gérer les routes
// app.use('/quizz', quizzRouter);



// Définition de la route '/hello'
app.get('/hello', (req, res) => {
    // Récupération de la collection 'quizzMJ'
    mongoose.connection.db.collection('quizzMJ', (err, collection) => {
        // Récupération de tous les documents de la collection et conversion en tableau
        collection.find().toArray((err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                // Envoi des données récupérées en réponse à la requête
                res.send(data);
            }
        });
    });
});

// Démarrage du server sur le port 8888
app.listen(8888, () => {
    console.log('Server running on port 8888...');
    });




//     Dans ce code, j'ai utilisé le framework Express pour créer un serveur et gérer les routes. J'ai également utilisé Mongoose pour établir une connexion à une base de données MongoDB Atlas. J'ai utilisé la librairie cors pour permettre les requêtes cross-origin.

// J'ai défini une route GET '/hello' qui récupère tous les documents de la collection 'quizzMJ' en utilisant la méthode `find()` de Mongoose. J'ai utilisé la méthode `toArray()` pour convertir les résultats en tableau. Enfin, j'ai envoyé les données récupérées en réponse à la requête avec la méthode `send()` d'Express.
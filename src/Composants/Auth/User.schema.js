const mongoose = require('mongoose');

// Création du schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
    // Nom d'utilisateur, doit être unique et obligatoire
    username: {
        type: String,
        required: true,
        unique: true
    },
    // Mot de passe, doit être hashé et obligatoire
    password: {
        type: String,
        required: true
    },
    // Adresse email, doit être unique et obligatoire
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Rôle de l'utilisateur (admin ou utilisateur standard)
    role: {
        type: String,
        default: 'user'
    }
});

// Exportation du modèle
module.exports = mongoose.model('User', userSchema);

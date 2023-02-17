import React, { useState } from 'react';
import { Form, Button } from 'reactstrap';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données de connexion à l'API pour vérifier les informations de connexion
        fetch("http://localhost:8888/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.token){
                // Enregistrer le token dans le stockage local pour une utilisation ultérieure
                localStorage.setItem("token", data.token);
                // Rediriger vers une page protégée
            } else {
                // Afficher un message d'erreur
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
            <div>
                <label>Mot de passe:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <Button type="submit">Se connecter</Button>
        </Form>
    );
}
export default Login;
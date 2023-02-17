import React, { useState, useEffect } from 'react';
import { Form, Button } from 'reactstrap';
import axios from 'axios';

const CreateQuizz = () => {
    const [formData, setFormData] = useState({
        question: "",
        options: [],
        correctAnswer: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données à l'API pour créer un nouveau document
        axios.post("http://localhost:8888/create", formData, {
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8888/create',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => console.log(err))

        // raffraichir la page après la création du quizz
        // window.location.reload();

    }




    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Envoyer les données à l'API pour créer un nouveau document
    //     fetch("http://localhost:8888/create", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.token){
    //             // Enregistrer le token dans le stockage local pour une utilisation ultérieure
    //             localStorage.setItem("token", data.token);
    //             // Rediriger vers une page protégée
    //         } else {
    //             // Afficher un message d'erreur
    //         }
    //     })
    //     .catch(err => console.log(err))
    //     // raffraichir la page après la création du quizz

    //     // window.location.reload();
    // }

    // raffraichir la page après la création du quizz
    // window.location.reload();




    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label>Question:</label>
                <input type="text" name="question" value={formData.question} onChange={handleChange} />
            </div>
            <div>
                <label>Option 1:</label>
                <input type="text" name="options1" value={formData.options[0]} onChange={handleChange} />
            </div>
             <div>
                <label>Option 2:</label>
                <input type="text" name="options2" value={formData.options[1]} onChange={handleChange} />
            </div>
             <div>
                <label>Option 3:</label>
                <input type="text" name="options3" value={formData.options[2]} onChange={handleChange} />
            </div>
             <div>
                <label>Option 4:</label>
                <input type="text" name="options4" value={formData.options[3]} onChange={handleChange} />
            </div>

            <div>
                <label>Réponse correcte:</label>
                <input type="text" name="correctAnswer" value={formData.correctAnswer} onChange={handleChange} />
</div>
<Button type="submit">Créer le quizz</Button>
</Form>
);
}

export default CreateQuizz;

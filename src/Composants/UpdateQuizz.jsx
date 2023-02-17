import React, { useState } from 'react';
import { Form, Button } from 'reactstrap';

const UpdateQuizz = () => {
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
        // Envoyer les données à l'API pour mettre à jour le document
    }

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
            <Button type="submit">Mettre à jour le quizz</Button>
        </Form>
    );
}

export default UpdateQuizz;

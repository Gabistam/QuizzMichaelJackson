import React, { useState } from 'react';
import { Form, Button } from 'reactstrap';

const DeleteQuizz = () => {
    const [question, setQuestion] = useState("");

    const handleChange = (e) => {
        setQuestion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer la question à l'API pour supprimer le document correspondant
        fetch(`http://localhost:8888/hello/${question}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        
        // raffraichir la page après la suppression du quizz

        window.location.reload();
    }



    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label>Question:</label>
                <input type="text" value={question} onChange={handleChange} />
            </div>
            <Button type="submit">Supprimer le quizz</Button>
        </Form>
    );
}

export default DeleteQuizz;

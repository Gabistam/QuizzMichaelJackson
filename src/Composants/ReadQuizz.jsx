import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ReadQuizz = () => {
    const [quizz, setQuizz] = useState([]);

    useEffect(() => {
        // Récupérer les données de la collection via l'API
        fetch("http://localhost:8888/hello")
        .then(res => res.json())
        .then(data => setQuizz(data))
        .catch(err => console.log(err))
    }, []);

    return (
        <ListGroup>
            {quizz.map((item) => (
                <ListGroupItem key={item._id}>
                    <h3>{item.question}</h3>
                    <p>{item.options.join(", ")}</p>
                    <p>Réponse correcte: {item.correctAnswer}</p>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default ReadQuizz;

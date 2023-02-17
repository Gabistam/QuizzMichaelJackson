import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const QuizzMichaelJackson = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [quizz, setQuizz] = useState([]);

  useEffect(() => {
    // Récupérer les données de la collection via l'API
    fetch("http://localhost:8888/hello")
    .then(res => res.json())
    .then(data => setQuizz(data))
    .catch(err => console.log(err))
  }, [])


  const handleAnswer = (answer) => {
    if (currentQuestion < quizz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswers([...answers, answer]);
    } else {
      setIsFinished(true);
      setAnswers([...answers, answer]);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setIsFinished(false);
  };

  useEffect(() => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === quizz[index].correctAnswer) {
        score++;
      }
    });
    setScore(score);
  }, [answers]);

  return (
    <Container className='quizzContainer'>
      <Row>
        <Col >
          {isFinished ? (
            <Card >
              <Card.Body>
              <h1>Quizz sur Michael Jackson</h1>
              <h2>Vous avez terminé le quizz ! Votre score est de {score}0%</h2>
              <div className='commentaire'>{{

                
                  0: <div><img src="https://i.pinimg.com/originals/f5/9d/4d/f59d4d28d01733b33d6a97b941ee7e40.gif" alt="Michael Jackson" /><h3>Vous n'avez pas de connaissance sur Michael Jackson</h3>
                  </div> ,
                  1: <div><img src="https://i.pinimg.com/originals/f5/9d/4d/f59d4d28d01733b33d6a97b941ee7e40.gif" alt="Michael Jackson" /><h3>Vous n'avez pas de connaissance sur Michael Jackson</h3>
                  </div> ,
                  2:<div><img src="https://66.media.tumblr.com/tumblr_m1iarlr5V91rqfhi2o1_500.gif" alt="Michael Jackson" /><h3>Vous avez très peu de connaissances sur Michael Jackson</h3> </div> ,
                  3:<div><img src="https://66.media.tumblr.com/tumblr_m1iarlr5V91rqfhi2o1_500.gif" alt="Michael Jackson" /><h3>Vous avez une connaissance basique sur Michael Jackson</h3></div> ,
                  4:<div><img src="https://img.wattpad.com/2e1cea105874b5ce95f0bd56750d07a9a64103a2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f51664c62304356347253515677413d3d2d3538363539313132322e313533363638386233323739636132333137363131303437353830352e676966" alt="Michael Jackson" /><h3>Vous avez une connaissance basique sur Michael Jackson</h3></div> ,
                  5:<div><img src="https://img.wattpad.com/2e1cea105874b5ce95f0bd56750d07a9a64103a2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f51664c62304356347253515677413d3d2d3538363539313132322e313533363638386233323739636132333137363131303437353830352e676966" alt="Michael Jackson" /><h3>Vous avez une connaissance moyenne sur Michael Jackson</h3></div> ,
                  6:<div> <img src="https://media3.giphy.com/media/6pJNYBYSMFod2/giphy.gif" alt="Michael Jackson" /><h3>Vous avez une connaissance moyenne sur Michael Jackson</h3></div> ,
                  7:<div> <img src="https://media3.giphy.com/media/6pJNYBYSMFod2/giphy.gif" alt="Michael Jackson" /><h3>Vous avez une connaissance élevée sur Michael Jackson</h3></div>,
                  8:<div><img src="https://media.tenor.com/uFeEqoLUm0kAAAAC/michael-jackson.gif" alt="Michael Jackson" /><h3>Bravo!!! Vous avez une connaissance très élevée sur Michael Jackson</h3></div> ,
                  9:<div><img src="https://media.tenor.com/uFeEqoLUm0kAAAAC/michael-jackson.gif" alt="Michael Jackson" /> <h3>Bravo!!! Vous avez une connaissance très élevée sur Michael Jackson</h3></div> ,
                  10:<div><img src="https://media.tenor.com/exQUnh3bRN0AAAAC/michael-jackson-dance.gif" alt="Michael Jackson" /><h3>Bravo!!! Vous avez une connaissance parfaite sur Michael Jackson</h3></div> 

                }[score]

              }
              </div>
              <Button onClick={handleReset}>Recommencer</Button>
            </Card.Body>
            </Card>
          ) : (
            
            <Card >
              <Card.Body>
              <h1>Quizz sur Michael Jackson</h1>
              <h2 className="text-center">
                Question {currentQuestion + 1} / {quizz.length}
              </h2>
              <p className="text-center">
                {quizz[currentQuestion] && quizz[currentQuestion].question}
              </p>
              <div className="d-flex flex-column">
                {quizz[currentQuestion] &&
                  quizz[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      className="my-2"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
              </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default QuizzMichaelJackson;

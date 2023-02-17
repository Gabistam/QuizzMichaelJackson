import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
//import css from './QuizzMichaelJackson.css';
import "./QuizzMichaelJackson.css";


const QuizzMichaelJackson = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Quel est le vrai nom de Michael Jackson ?",
      options: [
        "Michael Joseph Jackson",
        "Michael David Jackson",
        "Michael Peter Jackson",
        "Michael James Jackson"
      ],
      correctAnswer: "Michael Joseph Jackson",
      points: 10
    },
    {
      question: "En quelle année Michael Jackson a-t-il sorti son premier album solo ?",
      options: [
        "1982",
        "1987",
        "1971",
        "1995"
      ],
      correctAnswer: "1971",
      points: 10
    },
    {
      question: "Quel est le titre de l'album de Michael Jackson qui a vendu le plus de copies dans le monde ?",
      options: [
        "Bad",
        "Dangerous",
        "Invincible",
        "Thriller"
      ],
      correctAnswer: "Thriller",
      points: 10
    },
    {
      question: "Quel est le titre de la chanson de Michael Jackson qui a été la plus vendue dans le monde ?",
      options: [
        "Billie Jean",
        "Beat It",
        "Thriller",
        "Smooth Criminal"
      ],
      correctAnswer: "Billie Jean",
      points: 10
    },
    {
      question: "Sur quel album Michael Jackson a-t-il chanté la chanson 'Heal the World' ?",
      options: [
        "Dangerous",
        "Bad",
        "Invincible",
        "HIStory"
      ],
      correctAnswer: "HIStory",
      points: 10
    },
    {
      question: "Dans quel clip Michael Jackson a-t-il dansé avec des chimpanzés ?",
      options: [
        "Smooth Criminal",
        "Beat It",
        "Thriller",
        "Black or White"
      ],
      correctAnswer: "Black or White",
      points: 10
    },
    {
      question: "Sur quel titre Michael Jackson a-t-il chanté avec sa sœur Janet Jackson ?",
      options: [
        "Scream",
        "You Rock My World",
        "Blood on the Dance Floor",
        "Dirty Diana"
      ],
      correctAnswer: "Scream",
    },
    {        question: "En quelle année Michael Jackson est-il mort ?",
    options: [
      "2009",
      "2001",
      "2005",
      "2003"
    ],
    correctAnswer: "2009",
    points: 10
  },
  {
    question: "Quelle est la date de naissance de Michael Jackson ?",
    options: [
      "29 août 1958",
      "02 septembre 1958",
      "29 août 1959",
      "02 septembre 1959"
    ],
    correctAnswer: "29 août 1958",
    points: 10
  },
  {
    question: "Quel clip de Michael Jackson a été tourné au Brésil ?",
    options: [
      "Smooth Criminal",
      "Beat It",
      "Thriller",
      "They Don't Care About Us"
    ],
    correctAnswer: "They Don't Care About Us",
    points: 10
  },


  ];




  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
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
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    setScore(score);
  }, [answers]);

  if (isFinished) {
    return (
      <Container>
      <Row>
        <Col>
          <Card>
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

              //   0: "Vous n'avez pas de connaissance sur Michael Jackson" && <img src="https://i.pinimg.com/originals/f5/9d/4d/f59d4d28d01733b33d6a97b941ee7e40.gif" alt="Michael Jackson" />,
              //   1: "Vous avez une connaissance basique sur Michael Jackson" && <img src="https://66.media.tumblr.com/tumblr_m1iarlr5V91rqfhi2o1_500.gif" alt="Michael Jackson" />,
              //   2: "Vous avez une connaissance moyenne sur Michael Jackson" && <img src="https://img.wattpad.com/2e1cea105874b5ce95f0bd56750d07a9a64103a2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f51664c62304356347253515677413d3d2d3538363539313132322e313533363638386233323739636132333137363131303437353830352e676966" alt="Michael Jackson" />,
              //   3: "Vous avez une connaissance élevée sur Michael Jackson" && <img src="https://media3.giphy.com/media/6pJNYBYSMFod2/giphy.gif" alt="Michael Jackson" />,
              //   4: "Bravo!!! Vous avez une connaissance très élevée sur Michael Jackson" && <img src="https://media.tenor.com/uFeEqoLUm0kAAAAC/michael-jackson.gif" alt="Michael Jackson" />,
              //   5: "Bravo!!! Vous avez une connaissance parfaite sur Michael Jackson" && <img src="https://media.tenor.com/exQUnh3bRN0AAAAC/michael-jackson-dance.gif" alt="Michael Jackson" />

              // }[score]
              }
              </div>
              <Button onClick={handleReset}>Recommencer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }


  return (
    <Container className='quizzContainer'>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Quizz sur Michael Jackson</h1>
              <h2>{questions[currentQuestion].question}</h2>
              {questions[currentQuestion].options.map((option, index) => (
                <Button key={index} onClick={() => handleAnswer(option)}>{option}</Button>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizzMichaelJackson;




                
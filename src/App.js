import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Composants/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Composants/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateQuizz from './Composants/CreateQuizz';
import DeleteQuizz from './Composants/DeleteQuizz';
import ReadQuizz from './Composants/ReadQuizz';
import UpdateQuizz from './Composants/UpdateQuizz';
import Register from './Composants/Auth/Register';
import Login from './Composants/Auth/Login';
import QuizzMichaelJackson from './Composants/QuizzMichaelJackson';

export default function App() {

  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<QuizzMichaelJackson />} />
        <Route path="/create" element={<CreateQuizz />} />
        <Route path="/delete" element={<DeleteQuizz />} />
        <Route path="/read" element={<ReadQuizz />} />
        <Route path="/update" element={<UpdateQuizz />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="Connexion" element={<Login />} />


        
      </Routes>
      </BrowserRouter>
  )
}

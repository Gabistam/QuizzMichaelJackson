import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Faire une requête POST pour envoyer les données d'inscription à l'API
      // En cas de succès, rediriger vers la page de connexion
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"    
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </FormGroup>
        <Button type="submit">Register</Button>
        </Form>
        {error && <p>{error}</p>}
    </div>
    );
};

export default Register;

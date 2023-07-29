import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './style/AlertContactSuccess.css';

export default function AlertContactSuccess() {
  return (
    <div className="background-color-grey mt-5">
      <Alert variant="success" className="container alert-message">
        <Alert.Heading>Enviado com sucesso!</Alert.Heading>
        <p>
          Agradecemos o seu contato e ficamos muito felizes em saber do seu interesse
          em nossos
          {' '}
          <em>produtos/serviços</em>
          .
          <br />
        </p>
        <p>Esperamos que sua experiência conosco supere as suas expectativas.</p>
        <hr />
        <p className="mb-0">
          Retornaremos em breve.
        </p>
        <Button as={ Link } to="/" href="/" className="mt-3">Voltar</Button>
      </Alert>
    </div>
  );
}

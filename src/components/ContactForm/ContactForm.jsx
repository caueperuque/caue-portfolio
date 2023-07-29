import React, { useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Context from '../../context/Context';
import './style/ContactForm.scss';

export default function ContactForm() {
  const { setSubmitForm } = useContext(Context);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const verifyBtn = () => {
    const { name, email, message } = form;
    const num = 3;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return !(name.length >= num && emailRegex.test(email) && message.length > num);
  };

  const handleFormSubmit = () => {
    setSubmitForm(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_96mzy6h', 'template_gkrawx6', e.target, 'Aq6-O1yKAPWsg06cj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    handleFormSubmit();
  };

  return (
    <div className="background-color-grey">
      <Form className="container form" onSubmit={ sendEmail }>
        <h2 className="form__text text-center mb-5 pt-4">Formulário de Contato</h2>
        <>
          <FloatingLabel
            controlId="floatingInput"
            label="Nome completo"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nome completo"
              value={ form.name }
              name="name"
              onChange={ handleChange }
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="E-mail"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={ form.email }
              name="email"
              onChange={ handleChange }
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Deixe sua mensagem aqui"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Deixe sua mensagem aqui"
              style={ { height: '100px' } }
              value={ form.message }
              name="message"
              onChange={ handleChange }
              required
            />
          </FloatingLabel>
        </>
        <Button
          variant="primary"
          type="submit"
          className="btn"
          value="Send"
          disabled={ verifyBtn() }
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
}

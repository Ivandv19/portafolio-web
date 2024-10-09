import styled from 'styled-components';
import { useState } from 'react';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #fff; /* Color de fondo blanco */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 100px; /* Altura del área de texto */
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1abc9c; /* Color al pasar el mouse */
  }
`;

const SuccessMessage = styled.p`
  color: green;
`;

const ContactoContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;

`

const Contacto = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Manejo del envío del formulario
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json' // Para recibir la respuesta en formato JSON
      }
    });

    if (response.ok) {
      setIsSubmitted(true); // Cambia el estado a enviado
    } else {
      // Manejo de error (opcional)
      console.error('Error al enviar el formulario');
    }
  };

  return (
    <SectionContainer id="contacto">
      <ContactoContainer>
        <SectionTitle>Contacto</SectionTitle>
        {!isSubmitted ? (
          <ContactForm
            action="https://formspree.io/f/xeoqjwqw" // Tu endpoint de Formspree
            method="POST"
            onSubmit={handleSubmit} // Manejo del envío
          >
            <Input type="text" name="nombre" placeholder="Tu nombre" required />
            <Input type="email" name="correo" placeholder="Tu correo electrónico" required />
            <TextArea name="mensaje" placeholder="Tu mensaje" required />
            <SubmitButton type="submit">Enviar</SubmitButton>
          </ContactForm>
        ) : (
          <SuccessMessage>¡Tu mensaje ha sido enviado con éxito!</SuccessMessage>
        )}
      </ContactoContainer>
    </SectionContainer>
  );
};

export default Contacto;
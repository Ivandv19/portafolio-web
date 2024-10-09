import styled from 'styled-components';
import { useState } from 'react';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #fff; /* Color de fondo blanco */
  text-align: center;
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

const Contacto = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <SectionContainer id="contacto">
      <SectionTitle>Contacto</SectionTitle>
      {!isSubmitted ? (
        <ContactForm
          action="https://formspree.io/f/xeoqjwqw"
          method="POST"
          onSubmit={() => setIsSubmitted(true)} // Cambia el estado a enviado al enviar
        >
          <Input type="text" name="nombre" placeholder="Tu nombre" required />
          <Input type="email" name="correo" placeholder="Tu correo electrónico" required />
          <TextArea name="mensaje" placeholder="Tu mensaje" required />
          <SubmitButton type="submit">Enviar</SubmitButton>
        </ContactForm>
      ) : (
        <SuccessMessage>¡Tu mensaje ha sido enviado con éxito!</SuccessMessage>
      )}
    </SectionContainer>
  );
};

export default Contacto;
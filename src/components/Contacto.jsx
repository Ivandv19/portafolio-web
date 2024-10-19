import styled from 'styled-components';
import { useState } from 'react';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
  }
`;

const SectionTitle = styled.h2`
 font-size: 42px;
  margin-bottom: 20px;
  color: var(--color-primary);
  position: relative; /* Necesario para posicionar el pseudo-elemento */

/* Barra debajo del texto que aparece al pasar el mouse */
&::after {
  content: '';
  position: absolute;
  bottom: -5px; /* Ajusta la distancia de la barra al texto */
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-secondary); /* Rojo oscuro */
  transition: width 0.4s ease, left 0.4s ease; /* Animación suave */
}
&:hover::after {
  width: 100%; /* La barra se extiende a todo el ancho */
  left: 0; /* La barra se anima desde el centro hacia los extremos */
}
&:hover {
  color: var(--color-primary); /* Mantiene el color del texto al hacer hover */
}

@media (max-width: 480px) { // Cambia a móviles
    font-size: 10vw;
  }
  
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) { // Cambia a tablet
    width: 100%;
  }
  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
    height: auto;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 4px;

  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
    height: auto;
  }
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

  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
    height: auto;
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


  @media (max-width: 768px) { // Cambia a tablet
    width: 100%;
  }
  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
    height: auto;
  }
 

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
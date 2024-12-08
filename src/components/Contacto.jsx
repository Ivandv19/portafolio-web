import styled from "styled-components";
import { useState } from "react";

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #ecf0f1;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  @media (max-width: 480px) {
    // Cambia a móviles
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
  }
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
  color: var(--color-primary);
  position: relative; 

  /* Barra debajo del texto que aparece al pasar el mouse */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Ajusta la distancia de la barra al texto */
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--color-secondary); 
    transition:
      width 0.4s ease,
      left 0.4s ease; 
  }
  &:hover::after {
    width: 100%; /* La barra se extiende a todo el ancho */
    left: 0; /* La barra se anima desde el centro hacia los extremos */
  }
  &:hover {
    color: var(
      --color-primary
    ); /* Mantiene el color del texto al hacer hover */
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    font-size: 10vw;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) {
    // Cambia a tablet
    width: 100%;
  }
  @media (max-width: 480px) {
    // Cambia a móviles
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

  @media (max-width: 480px) {
    // Cambia a móviles
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

  @media (max-width: 480px) {
    // Cambia a móviles
    width: 100%;
    height: auto;
  }
`;

const SuccessMessage = styled.p`
  color: green;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoadingMessage = styled.p`
  color: blue;
  margin-top: 20px;
`;

const ContactoContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    // Cambia a tablet
    width: 100%;
  }
  @media (max-width: 480px) {
    // Cambia a móviles
    width: 100%;
    height: auto;
  }
`;

const Contacto = () => {
  // Estados para controlar el envío del formulario, la carga y los errores
  const [isSubmitted, setIsSubmitted] = useState(false); // Indica si el formulario se ha enviado
  const [isLoading, setIsLoading] = useState(false); // Indica si se está enviando el formulario
  const [error, setError] = useState(null); // Almacena cualquier error que ocurra durante el envío

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    setIsLoading(true); // Comienza a cargar al enviar el formulario

    // Manejo del envío del formulario
    const form = e.target; // Obtiene el formulario que se está enviando
    const data = new FormData(form); // Crea un objeto FormData con los datos del formulario

    try {
      // Realiza la solicitud de envío
      const response = await fetch(form.action, {
        method: form.method, // Usa el método especificado en el formulario (POST)
        body: data, // Envía los datos del formulario
        headers: {
          Accept: "application/json", // Para recibir la respuesta en formato JSON
        },
      });

      if (response.ok) {
        setIsSubmitted(true); // Cambia el estado a enviado si la respuesta es exitosa
        setError(null); // Reinicia el estado de error si el envío fue exitoso
      } else {
        // Si la respuesta no es exitosa, lanza un error
        throw new Error("Error al enviar el formulario");
      }
    } catch (err) {
      // Maneja cualquier error que ocurra durante el envío
      console.error(err); // Muestra el error en la consola para depuración
      setError(
        "Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde.",
      ); // Establece el mensaje de error
    } finally {
      setIsLoading(false); // Termina la carga al final del envío, independientemente del resultado
    }
  };

  return (
    <SectionContainer id="contacto">
      {" "}
      {/* Contenedor principal de la sección de contacto */}
      <ContactoContainer>
        {" "}
        {/* Contenedor específico para el contacto */}
        <SectionTitle>Contacto</SectionTitle> {/* Título de la sección */}
        {!isSubmitted ? ( // Verifica si el formulario ha sido enviado
          <ContactForm
            action="https://formspree.io/f/xeoqjwqw" // Tu endpoint de Formspree
            method="POST" // Método de envío del formulario
            onSubmit={handleSubmit} // Manejo del envío
          >
            <Input type="text" name="nombre" placeholder="Tu nombre" required />{" "}
            {/* Campo de nombre */}
            <Input
              type="email"
              name="correo"
              placeholder="Tu correo electrónico"
              required
            />{" "}
            {/* Campo de correo */}
            <TextArea name="mensaje" placeholder="Tu mensaje" required />{" "}
            {/* Campo de mensaje */}
            <SubmitButton type="submit" disabled={isLoading}>
              Enviar
            </SubmitButton>{" "}
            {/* Botón de envío, deshabilitado durante la carga */}
          </ContactForm>
        ) : (
          <SuccessMessage>
            ¡Tu mensaje ha sido enviado con éxito!
          </SuccessMessage> // Mensaje de éxito si se envía correctamente
        )}
        {isLoading && <LoadingMessage>Enviando...</LoadingMessage>}{" "}
        {/* Mensaje de carga mientras se envía */}
        {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
        {/* Mensaje de error si ocurre algún problema */}
      </ContactoContainer>
    </SectionContainer>
  );
};

export default Contacto; // Exporta el componente para su uso en otras partes de la aplicación

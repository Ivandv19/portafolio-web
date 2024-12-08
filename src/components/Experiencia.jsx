import styled from "styled-components";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const SectionContainer = styled.section`
  padding: 120px 20px;
  background-color: #ecf0f1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 50vh;
  gap: 20px;

  @media (max-width: 480px) {
    // Cambia a móviles
    width: 100%;
    height: auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
  color: var(--color-primary);
  position: relative; /* Necesario para posicionar el pseudo-elemento */

  /* Barra debajo del texto que aparece al pasar el mouse */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Ajusta la distancia de la barra al texto */
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--color-secondary); /* Rojo oscuro */
    transition:
      width 0.4s ease,
      left 0.4s ease; /* Animación suave */
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

const SectionInfo = styled.section`
  color: var(--color-background);
  text-align: center;
  line-height: 20px;
  max-width: 800px;

  @media (max-width: 480px) {
    // Cambia a móviles
    font-size: 4vw;
  }
`;

const Highlight = styled.span`
  color: var(
    --color-primary
  ); /* Puedes cambiar esto por un color más oscuro o uno que desees */
  font-weight: bold;
`;

const Experiencia = () => {
  return (
    <SectionContainer id="experiencia">
      <SectionTitle>Experiencia</SectionTitle>
      <SectionInfo>
        <p>
          Actualmente, <Highlight>no tengo experiencia laboral </Highlight>{" "}
          formal en el sector, pero he <Highlight>trabajado </Highlight> en
          varios <Highlight>proyectos </Highlight> que{" "}
          <Highlight> demuestran </Highlight> mis{" "}
          <Highlight>habilidades técnicas</Highlight>. Estos{" "}
          <Highlight>proyectos</Highlight>, que se describen a{" "}
          <Highlight>continuación</Highlight>, reflejan mi{" "}
          <Highlight>capacidad</Highlight> para <Highlight>aplicar </Highlight>
          lo <Highlight>aprendido</Highlight> y{" "}
          <Highlight> desarrollar soluciones efectivas.</Highlight>{" "}
        </p>
      </SectionInfo>
    </SectionContainer>
  );
};

export default Experiencia;

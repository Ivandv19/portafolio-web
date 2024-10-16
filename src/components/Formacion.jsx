import styled from 'styled-components';
import { FaCode, FaLaptopCode} from 'react-icons/fa';

const SectionContainer = styled.section`
 padding: 60px 20px;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 50vh;

  @media (max-width: 480px) { // Cambia a móviles
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
`;

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EducationItem = styled.li`
  font-size: 18px;
  color: #34495e;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    margin-right: 10px;
    color: #34495e;
  }

  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  }
`;

const Title = styled.span`
  font-weight: bold;
`;

const Institution = styled.span`
  font-style: italic;
`;

const SectionInfo = styled.section`
 text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`

const Formacion = () => {
  return (
    <SectionContainer id="formacion">
      <SectionTitle>Formación</SectionTitle>
      <SectionInfo>
        <EducationList>
          <EducationItem>
            <FaCode /> <Title>Carrera Técnica en Programación</Title> - <Institution>CECYTEM CHIMALHUACAN II</Institution>, Chimalhuacán, Estado de México (2017-2020)
          </EducationItem>
          <EducationItem>
            <FaLaptopCode /> <Title>Desarrollo Front-End</Title> - <Institution>Alura Latam</Institution> - Remoto (Enero 2024 - Julio 2024)
          </EducationItem>
        </EducationList>
      </SectionInfo>
    </SectionContainer>
  );
};

export default Formacion;
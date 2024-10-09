import styled from 'styled-components';
import { FaCode, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #f7f9fb; /* Fondo claro para contraste */
 
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #2c3e50;
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
      <SectionInfo>
        <SectionTitle>Formación</SectionTitle>
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
import styled from 'styled-components';
import { FaBook, FaGamepad, FaFutbol, FaPlane, FaMusic, FaTv, FaLaptopCode } from 'react-icons/fa'; // Importamos los íconos

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #ecf0f1; /* Color de fondo claro */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const CarouselWrapper = styled.div`
  overflow: hidden; /* Oculta cualquier contenido que se desborde del contenedor */
  max-width: 80%; /* Ajusta el ancho máximo del carrusel */
`;

const CarouselContainer = styled.div`
  display: flex;
  animation: scrollRight 30s linear infinite; /* Animación continua hacia la derecha */
  width: calc(100% * 2); /* Duplicamos el ancho para permitir el efecto de carrusel */

  @keyframes scrollRight {
    0% {
      transform: translateX(-50%); /* Comienza desde la izquierda */
    }
    100% {
      transform: translateX(0); /* Se mueve hacia la derecha */
    }
  }
`;

const HobbyItem = styled.div`
  font-size: 18px;
  color: #34495e;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;

  svg {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const hobbies = [
  { name: 'Leer libros', icon: <FaBook /> },
  { name: 'Jugar videojuegos', icon: <FaGamepad /> },
  { name: 'Practicar deportes', icon: <FaFutbol /> },
  { name: 'Viajar', icon: <FaPlane /> },
  { name: 'Escuchar música', icon: <FaMusic /> },
  { name: 'Ver series y películas', icon: <FaTv /> },
  { name: 'Aprender nuevas tecnologías', icon: <FaLaptopCode /> },
];

const Hobbies = () => {
  return (
    <SectionContainer id="hobbies">
      <SectionTitle>Hobbies</SectionTitle>
      <CarouselWrapper>
        <CarouselContainer>
          {[...hobbies, ...hobbies].map((hobby, index) => (
            <HobbyItem key={index}>
              {hobby.icon}
              {hobby.name}
            </HobbyItem>
          ))}
        </CarouselContainer>
      </CarouselWrapper>
    </SectionContainer>
  );
};

export default Hobbies;
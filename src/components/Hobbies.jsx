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
  justify-content: space-evenly;
  width: 100%;
  height: 50vh;
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

const CarouselWrapper = styled.div`
  overflow: hidden; /* Oculta cualquier contenido que se desborde del contenedor */
  max-width: 80%; /* Ajusta el ancho máximo del carrusel */
`;

const CarouselContainer = styled.div`
  display: flex;
  animation: scrollRight 15s linear infinite; /* Animación continua hacia la derecha */
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
  { name: 'Visitar museos', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M19.5 10.5V19m-10-8.5V19m-5-8.5V19m10-8.5V19M2 21h20M0 23.5h24m-.5-15.75v.75H.5v-.75C5 6 9.186 3.577 11.438.875L11.75.5h.5l.312.375C14.814 3.577 19 6 23.5 7.75Z" /></svg> }, // Puedes usar un ícono adecuado para museos
  { name: 'Tocar el piano', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h3.038v-4.808H8.25q-.367 0-.607-.239q-.24-.24-.24-.607V5H5.617q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173m9.73 0h3.039q.269 0 .442-.173t.173-.443V5.616q0-.27-.173-.443T18.385 5h-1.789v8.346q0 .368-.24.607q-.239.24-.606.24h-.404zM9.54 19h4.923v-4.808h-.404q-.367 0-.607-.239q-.24-.24-.24-.607V5H10.79v8.346q0 .368-.24.607q-.24.24-.607.24H9.54z" /></svg> }, // Asegúrate de tener un ícono de piano
  { name: 'Jugar videojuegos', icon: <FaGamepad /> },
  { name: 'Aprender nuevas tecnologías', icon: <FaLaptopCode /> },
  { name: 'Ver series y películas', icon: <FaTv /> },
  { name: 'Escuchar música', icon: <FaMusic /> },
  { name: 'Practicar deportes', icon: <FaFutbol /> },

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
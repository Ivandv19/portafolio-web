import styled from "styled-components";
import {
  FaGamepad,
  FaFutbol,
  FaMusic,
  FaTv,
  FaLaptopCode,
} from "react-icons/fa"; // Eliminado el ícono de viaje

const SectionContainer = styled.section`
  padding: 120px 20px; /* Aumentar el padding superior para dejar espacio */
  background-color: #ecf0f1;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 40px;
  color: var(--color-primary);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--color-secondary);
    transition:
      width 0.4s ease,
      left 0.4s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    font-size: 10vw;
  }
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  width: 80%;
  justify-content: center;

  @media (max-width: 480px) {
    // Cambia a móviles
    width: 100%;
    padding: 0;
  }
`;

const HobbiesCard = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 40px;
    margin-bottom: 10px;
    color: var(--color-primary);
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #34495e;
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    p {
      font-size: 4vw;
    }
  }
`;

const hobbies = [
  {
    name: "Tocar piano",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h3.038v-4.808H8.25q-.367 0-.607-.239q-.24-.24-.24-.607V5H5.617q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173m9.73 0h3.039q.269 0 .442-.173t.173-.443V5.616q0-.27-.173-.443T18.385 5h-1.789v8.346q0 .368-.24.607q-.239.24-.606.24h-.404zM9.54 19h4.923v-4.808h-.404q-.367 0-.607-.239q-.24-.24-.24-.607V5H10.79v8.346q0 .368-.24.607q-.24.24-.607.24H9.54z"
        />
      </svg>
    ),
  }, 
  {
    name: "Visitar museos",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M19.5 10.5V19m-10-8.5V19m-5-8.5V19m10-8.5V19M2 21h20M0 23.5h24m-.5-15.75v.75H.5v-.75C5 6 9.186 3.577 11.438.875L11.75.5h.5l.312.375C14.814 3.577 19 6 23.5 7.75Z"
        />
      </svg>
    ),
  }, 
  { name: "Aprender nuevas tecnologías", icon: <FaLaptopCode /> },
  { name: "Jugar videojuegos", icon: <FaGamepad /> },
  { name: "Escuchar música", icon: <FaMusic /> },
  { name: "Ver series y películas", icon: <FaTv /> },
  { name: "Practicar deportes", icon: <FaFutbol /> },
];

const Hobbies = () => {
  return (
    // Contenedor de la sección "Hobbies" con el id "hobbies" para referencia en la navegación
    <SectionContainer id="hobbies">
      {/* Título principal de la sección */}
      <SectionTitle>Hobbies</SectionTitle>

      {/* Contenedor de la cuadrícula de hobbies */}
      <HobbiesGrid>
        {/* Mapea el array 'hobbies' y genera un HobbiesCard por cada hobby */}
        {hobbies.map((skill, index) => (
          <HobbiesCard key={index}>
            {skill.icon} {/* Ícono del hobby */}
            <p>{skill.name}</p> {/* Nombre del hobby */}
          </HobbiesCard>
        ))}
      </HobbiesGrid>
    </SectionContainer>
  );
};

export default Hobbies;

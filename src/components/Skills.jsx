import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact } from 'react-icons/fa';
import { DiDatabase } from 'react-icons/di'; // Suponiendo que DiDatabase es el icono que deseas para las bases de datos
import { SiStyledcomponents, SiVite } from 'react-icons/si'; // Icono para Styled Components y Vite

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
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
  overflow: hidden;
  max-width: 80%;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: calc(100% * 2); /* Asegúrate de que el ancho sea suficiente para los dos conjuntos */
  animation: scrollLeft 10s linear infinite;

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Mueve a la izquierda el 50% del ancho total */
    }
  }
`;

const SkillItem = styled.div`
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

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'npm', icon: <FaNpm /> },
  { name: 'pnpm', icon: <FaNpm /> }, // Aquí se agrega pnpm
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vercel', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.992 17.023L11.981 6.977L6.008 17.023z"/></svg> },
  { name: 'Oracle', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M21.88 5.88H10.125C4.536 5.88.005 10.407 0 15.995c-.005 5.589 4.527 10.12 10.115 10.125H21.88C27.469 26.12 32 21.588 32 16S27.469 5.88 21.88 5.88m-.255 16.672H10.38c-8.563-.172-8.563-12.932 0-13.104h11.245c8.735 0 8.735 13.104 0 13.104"/></svg> },
  { name: 'SQL', icon: <DiDatabase /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> }, // Nueva habilidad agregada
  { name: 'Vite', icon: <SiVite /> }, // Nueva habilidad agregada
];

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionTitle>Skills</SectionTitle>
      <CarouselWrapper>
        <CarouselContainer>
          {[...skills, ...skills].map((skill, index) => (
            <SkillItem key={index}>
              {skill.icon}
              {skill.name}
            </SkillItem>
          ))}
        </CarouselContainer>
      </CarouselWrapper>
    </SectionContainer>
  );
};

export default Skills;
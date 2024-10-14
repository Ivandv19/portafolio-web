import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact } from 'react-icons/fa';
import { DiDatabase } from 'react-icons/di';
import { SiStyledcomponents, SiVite } from 'react-icons/si';

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
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--color-secondary);
    transition: width 0.4s ease, left 0.4s ease;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
  &:hover {
    color: var(--color-primary);
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  max-width: 80%;
`;

const CarouselContainer = styled.div`
  display: flex;
  animation: scrollLeft 10s linear infinite; /* Aumenta el tiempo de la animación a 20s */
  
  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%); /* Mueve el 50% del ancho total */
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
  { name: 'pnpm', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M502 10v140H362V10zm-176 0v140H186V10zm-176 0v140H10V10zm352 176v140H362V186zM512 0H352v160h160zM336 0H176v160h160zM160 0H0v160h160zm352 176H352v160h160zM336 336H176V176h160zm0 16H176v160h160zm176 0H352v160h160zm-352 0H0v160h160z" /></svg> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vercel', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.992 17.023L11.981 6.977L6.008 17.023z" /></svg> },
  { name: 'Oracle', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M21.88 5.88H10.125C4.536 5.88.005 10.407 0 15.995c-.005 5.589 4.527 10.12 10.115 10.125H21.88C27.469 26.12 32 21.588 32 16S27.469 5.88 21.88 5.88m-.255 16.672H10.38c-8.563-.172-8.563-12.932 0-13.104h11.245c8.735 0 8.735 13.104 0 13.104" /></svg> },
  { name: 'SQL', icon: <DiDatabase /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'ChatGPT', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M18.38 27.94v-14.4l11.19-6.46c6.2-3.58 17.3 5.25 12.64 13.33" /><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m18.38 20.94l12.47-7.2l11.19 6.46c6.2 3.58 4.1 17.61-5.23 17.61" /><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m24.44 17.44l12.47 7.2v12.93c0 7.16-13.2 12.36-17.86 4.28" /><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M30.5 21.2v14.14L19.31 41.8c-6.2 3.58-17.3-5.25-12.64-13.33" /><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m30.5 27.94l-12.47 7.2l-11.19-6.46c-6.21-3.59-4.11-17.61 5.22-17.61" /><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m24.44 31.44l-12.47-7.2V11.31c0-7.16 13.2-12.36 17.86-4.28" /></svg> },
];

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionTitle>Skills</SectionTitle>
      <CarouselWrapper>
        <CarouselContainer>
          {/* Duplicar el contenido para crear un efecto de carrusel continuo */}
          <div style={{ display: 'flex' }}>
            {[...skills, ...skills].map((skill, index) => (
              <SkillItem key={index}>
                {skill.icon}
                {skill.name}
              </SkillItem>
            ))}
          </div>
        </CarouselContainer>
      </CarouselWrapper>
    </SectionContainer>
  );
};

export default Skills;
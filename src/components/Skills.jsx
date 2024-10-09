import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #fff;
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
  overflow: hidden;
  max-width: 80%;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: calc(100% * 2); /* Asegúrate de que el ancho sea suficiente para los dos conjuntos */
  animation: scrollLeft 20s linear infinite;

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
  { name: 'Vercel', icon: <FaDatabase /> },
  { name: 'Oracle', icon: <FaDatabase /> },
  { name: 'SQL', icon: <FaDatabase /> },
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
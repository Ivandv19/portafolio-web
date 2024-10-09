import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #ecf0f1;
  text-align: center;

`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectItem = styled.li`
  font-size: 18px;
  color: #34495e;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: transform 0.3s;
  max-width: 90%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%; /* Ajustar el tamaño según sea necesario */
  max-width: 600px; /* Ancho máximo */
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #2c3e50;
`;

const ProjectDescription = styled.p`
  margin: 0 0 10px 0;
  color: #34495e;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  text-decoration: none;
 
`;

const ProyectInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Proyectos = () => {
  return (
    <SectionContainer id="proyectos">
      <SectionTitle>Proyectos</SectionTitle>
      <ProjectsList>
        <ProjectItem>
          <ProjectImage src="/public/img/aluraflix.png" alt="Descripción del Proyecto 1" />
          <ProyectInfo>
            <ProjectTitle>AluraFlix</ProjectTitle>
            <ProjectDescription>Aluraflix es una aplicación web diseñada para gestionar y explorar una colección de videos. La aplicación permite a los usuarios visualizar videos filtrados por categoría, eliminar y editar videos, y crear nuevos videos mediante un formulario.</ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/challenge-aluraflix" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://alura-flix-flax.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </ProyectInfo>
        </ProjectItem>

        <ProjectItem>
          <ProjectImage src="/public/img/alura-cinema.png" alt="Descripción del Proyecto 1" />
          <ProyectInfo>
            <ProjectTitle>Alura Cinema</ProjectTitle>
            <ProjectDescription>Este proyecto es una aplicación para gestionar y visualizar videos, con funcionalidades como vizualizar y agregar a una seccion especial de favoritos. Está diseñado para proporcionar una experiencia interactiva y visualmente atractiva.</ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/alura-cinema" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://alura-cinema-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </ProyectInfo>
        </ProjectItem>


        <ProjectItem>
          <ProjectImage src="/public/img/encriptador.png" alt="Descripción del Proyecto 1" />
          <ProyectInfo>
            <ProjectTitle>Encriptador de Texto</ProjectTitle>
            <ProjectDescription> Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto. Está desarrollado con HTML, CSS y JavaScript.</ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/challenge-encriptador" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://encriptador-nine-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </ProyectInfo>
        </ProjectItem>
      </ProjectsList>
    </SectionContainer>
  );
};

export default Proyectos;
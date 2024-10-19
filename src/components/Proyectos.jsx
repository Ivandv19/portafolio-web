import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  }
 
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
  color: var(--color-primary);
  position: relative; /* Necesario para posicionar el pseudo-elemento */

  &::after {
    content: '';
    position: absolute;
    bottom: -5px; /* Ajusta la distancia de la barra al texto */
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--color-secondary); /* Color de la barra */
    transition: width 0.4s ease, left 0.4s ease; /* Animación suave */
  }

  &:hover::after {
    width: 100%; /* La barra se extiende a todo el ancho */
    left: 0; /* La barra se anima desde el centro hacia los extremos */
  }

  &:hover {
    color: var(--color-primary); /* Mantiene el color del texto al hacer hover */
  }

  @media (max-width: 480px) { // Cambia a móviles
    font-size: 10vw;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 80%; /* Ajusta el ancho máximo de la cuadrícula */
  margin: 0 auto; /* Centra la cuadrícula */

  @media (max-width: 480px) { // Cambia a móviles
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;

  }
`;

const ProjectItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 480px) { // Cambia a móviles
   
    width: 100%;
    height: auto;
  }
`;

const ProjectImage = styled.img`
  width: 100%; /* Ajustar el tamaño según sea necesario */
  border-radius: 8px;
  transition: filter 0.3s ease;

  ${ProjectItem}:hover & {
    filter: blur(2px);
  }

  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
    height: auto;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectItem}:hover & {
    opacity: 1;
  }

  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
    height: auto;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: #2c3e50;

  @media (max-width: 480px) { // Cambia a móviles
    font-size: 5vw;
  }
`;

const ProjectDescription = styled.p`
  margin: 10px 0;
  color: black;
  text-align: center;
  padding: 0 10px; /* Añadir un poco de padding lateral */

  @media (max-width: 480px) { // Cambia a móviles
    font-size: 4vw;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  text-decoration: none;

  @media (max-width: 480px) { // Cambia a móviles
    font-size: 4vw;
  }
`;

const Proyectos = () => {
  return (
    <SectionContainer id="proyectos">
      <SectionTitle>Proyectos</SectionTitle>
      <ProjectsGrid>
        <ProjectItem>
          <ProjectImage src="/img/encriptador.png" alt="Descripción del Proyecto 3" />
          <Overlay>
            <ProjectTitle>Encriptador de Texto</ProjectTitle>
            <ProjectDescription>
              Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto.
            </ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/challenge-encriptador" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://encriptador-nine-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </Overlay>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src="/img/spaceappv3.png" alt="Descripción del Proyecto 2" />
          <Overlay>
            <ProjectTitle>Space App V3</ProjectTitle>
            <ProjectDescription>
            es una aplicación interactiva para gestionar y visualizar contenido diverso, incluyendo una galería de imágenes, noticias y un apartado del sistema solar. 
            </ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/space-app-v3" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://space-app-v3.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </Overlay>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src="/img/spaceappv2.png" alt="Descripción del Proyecto 4" />
          <Overlay>
            <ProjectTitle>Space App v2</ProjectTitle>
            <ProjectDescription>
              Este proyecto es una aplicación para gestionar y visualizar una galería de fotos, con funcionalidades para filtrar y buscar contenido por una palabra o por tags. 
            </ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/SpaceAppv2" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://space-appv2.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </Overlay>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src="/img/aluraflix.png" alt="Descripción del Proyecto 1" />
          <Overlay>
            <ProjectTitle>AluraFlix</ProjectTitle>
            <ProjectDescription>
              Aluraflix es una aplicación web diseñada para gestionar y explorar una colección de videos.
            </ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/challenge-aluraflix" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://alura-flix-flax.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </Overlay>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src="/img/alura-cinema.png" alt="Descripción del Proyecto 2" />
          <Overlay>
            <ProjectTitle>Alura Cinema</ProjectTitle>
            <ProjectDescription>
              Este proyecto es una aplicación para gestionar y visualizar videos, con funcionalidades interactivas.
            </ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/alura-cinema" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://alura-cinema-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </Overlay>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src="/img/petshop.png" alt="Descripción del Proyecto 2" />
          <Overlay>
            <ProjectTitle>Petshop</ProjectTitle>
            <ProjectDescription>
            Este es un proyecto de gestión de contenido para un blog sobre mascotas. 
            </ProjectDescription>
            <ProjectLinks>
              <a href="https://github.com/ivandevI9/petshop" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
              <a href="https://petshop-kappa-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </ProjectLinks>
          </Overlay>
        </ProjectItem>
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default Proyectos;
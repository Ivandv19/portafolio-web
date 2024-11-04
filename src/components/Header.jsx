import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUser, FaToolbox, FaGamepad, FaBookOpen, FaFolderOpen, FaEnvelope } from 'react-icons/fa'; // Importa los íconos necesarios
import { FaBriefcase } from 'react-icons/fa';

const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 10px 20px; // Puedes reducir esto si lo deseas
  background-color: var(--color-primary);
  color: var(--color-text);
  border-bottom: 3px solid var(--color-accent);
  box-shadow: 0px -3px 15px 1px var(--color-accent);
  position: fixed; // Mantiene el header en una posición fija
  top: 0; // Por defecto, el header está en la parte superior
  z-index: 1000;
  scroll-behavior: smooth;



  @media (max-width: 900px) { 
    grid-template-columns: 1fr; /* Una sola columna */
    padding: 0; /* Ajusta el padding */
    bottom: 0; // Asegúrate de que esto esté aquí
    top: auto; // Establece 'top' en 'auto' para quitarlo de la parte superior
    border-top: 3px solid var(--color-accent); // Cambia el border a la parte superior
    box-shadow: 0px 3px 15px 1px var(--color-accent); // Ajusta la sombra si es necesario
    border-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }
`;

// Logo con animación de salida
const Logo = styled.img`
  width: ${({ $isShrunk }) => ($isShrunk ? '50px' : '80px')};
  height: auto;
  opacity: ${({ $isShrunk }) => ($isShrunk ? '0' : '1')};
  transition: width 2s ease, opacity 2s ease;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: ${({ $isShrunk }) => ($isShrunk ? 'none' : 'block')};
    width: 60px;
    
  }
  @media (max-width: 768px) { // Cambia a móviles
    width: 50px;
  }
`;

// Imagen de perfil con animación de entrada
const ProfileImage = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  transition: opacity 2.3s ease, transform 2.3s ease; /* Transición */

  &.fade-in {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
    
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Marca = styled.h1`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 10px; // Reduce el espacio entre el logo y el texto
  justify-content: center;
  width: 100%;
 
  @media (max-width: 768px) { 
    display: flex;
    flex-direction: row;

  }
`;

const Nav = styled.nav`
  display: flex; 
  justify-content: center; 
  gap: 10px; // Reduce el espacio entre los enlaces
  width: 100%;
  height: auto;


  @media (max-width: 768px) { 
    width: 100%;
    justify-content: space-evenly;
 
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  position: relative;
  transition: color 0.3s;

  &::after {
    content: '';
    position: absolute;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: var(--color-secondary);
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    transition: width 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
    box-shadow: 0px 0px 15px 0.5px var(--color-accent);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) { 
    display: none; 
  }
`;



const IconLink = styled.a`
  color: white;
  text-decoration: none;
  width: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

   svg {
    width: 100%;
    height: auto;
   }
`;

const NavCelulares = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 5px;
`

const ProfileImageMobile = styled.img`
   width: 50px;
  height: auto;
  border-radius: 50%;
  transition: opacity 0.5s ease, transform 0.5s ease; /* Transición */
`

const ImgPerfilContainerMobile = styled.a`
   display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: auto;
  }
`

const SectionContacto = styled.section``;

const Header = () => {
  const [activeLink, setActiveLink] = useState('#miportafolio');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [Shrunk, setShrunk] = useState(false);

  // Maneja el cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    setShrunk(scrollPos > 50);

    const sections = document.querySelectorAll('section');
    let lastActiveLink = activeLink;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop - sectionHeight / 2 && scrollPos < sectionTop + sectionHeight / 2) {
        const currentSectionId = `#${section.id}`;
        lastActiveLink = currentSectionId;
      }
    });

    if (lastActiveLink !== activeLink) {
      setActiveLink(lastActiveLink);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  return (
    <HeaderContainer>
      <Marca>
        {Shrunk ? (
          <ProfileImage
            src="https://avatars.githubusercontent.com/u/157653669?v=4"
            alt="Profile Image"
          />
        ) : (isMobile ? (
          <>
          </>
        ) : (
          <>
            < Logo src="/img/logo.gif" alt="Logo de Portafolio" />
          </>
        )

        )}
        {/* Renderiza el NavLink solo si no está en modo móvil */}
        {!isMobile && (
          <NavLink href="#miportafolio" $isActive={activeLink === '#miportafolio'}>
            Mi Portafolio
          </NavLink>
        )}
      </Marca>
      {/* Renderiza los enlaces de texto solo si no está en modo móvil */}
      {!isMobile && (
        <Nav>
          <NavLink href="#sobremi" $isActive={activeLink === '#sobremi'}>
            Sobre mí
          </NavLink>
          <NavLink href="#skills" $isActive={activeLink === '#skills'}>
            Skills
          </NavLink>
          <NavLink href="#hobbies" $isActive={activeLink === '#hobbies'}>
            Hobbies
          </NavLink>
          <NavLink href="#formacion" $isActive={activeLink === '#formacion'}>
            Formación
          </NavLink>
          <NavLink href="#experiencia" $isActive={activeLink === '#experiencia'}>
            Experiencia
          </NavLink>
          <NavLink href="#proyectos" $isActive={activeLink === '#proyectos'}>
            Proyectos
          </NavLink>
        </Nav>
      )}
      {/* También oculta el enlace de contacto en modo móvil */}
      {!isMobile && (
        <SectionContacto>
          <NavLink href="#contacto" $isActive={activeLink === '#contacto'}>
            Contacto
          </NavLink>
        </SectionContacto>
      )}
      {/* Renderiza los iconos en modo móvil */}
      {isMobile && (
        <NavCelulares>
          {Shrunk ? (
            <ImgPerfilContainerMobile href="#miportafolio" $isActive={activeLink === '#miportafolio'}  >
              <ProfileImageMobile
                src="https://avatars.githubusercontent.com/u/157653669?v=4"
                alt="Profile Image"
              />
            </ImgPerfilContainerMobile>
          ) : (
            <IconLink href="#miportafolio" title="Mi Portafolio">
              <Logo src="/img/logo.gif" alt="Logo de Portafolio" />
            </IconLink>
          )}
          <IconLink href="#sobremi" title="Sobre mí" $isActive={activeLink === '#sobremi'}>
            <FaUser />
          </IconLink>
          <IconLink href="#skills" title="Skills" $isActive={activeLink === '#skills'}>
            <FaToolbox />
          </IconLink>
          <IconLink href="#hobbies" title="Hobbies" $isActive={activeLink === '#hobbies'}>
            <FaGamepad />
          </IconLink>
          <IconLink href="#formacion" title="Formación" $isActive={activeLink === '#formacion'}>
            <FaBookOpen />
          </IconLink>
          <IconLink href="#experiencia" title="Experiencia" $isActive={activeLink === '#experiencia'}>
            <FaBriefcase />
          </IconLink>
          <IconLink href="#proyectos" title="Proyectos" $isActive={activeLink === '#proyectos'}>
            <FaFolderOpen />
          </IconLink>
          <IconLink href="#contacto" title="Contacto" $isActive={activeLink === '#contacto'}>
            <FaEnvelope />
          </IconLink>
        </NavCelulares>
      )}
    </HeaderContainer>
  );
};

export default Header;
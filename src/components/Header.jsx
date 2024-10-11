import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact, FaFutbol, FaGamepad, FaMusic, FaPlane, FaTv, FaBook } from 'react-icons/fa'; // Importa los íconos necesarios

// Estilos para el Header
const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--color-primary);
  color: var(--color-text);
  border-bottom: 3px solid var(--color-accent);
  box-shadow: 0px -3px 15px 1px var(--color-accent);
  position: fixed;
  top: 0;
  z-index: 1;
  scroll-behavior: smooth; /* Desplazamiento suave */
`;

const Logo = styled.img`
  width: ${({ isShrunk }) => (isShrunk ? '50px' : '80px')}; // Cambiar el tamaño del logo
  height: auto;
  opacity: ${({ isShrunk }) => (isShrunk ? '0' : '1')}; // Hacer que se vuelva invisible
  transition: width 0.5s ease, opacity 0.5s ease; // Animación más suave
`;

const ProfileImage = styled.img`
  width: 50px; // Tamaño de la foto de perfil
  height: auto;
  opacity: ${({ isShrunk }) => (isShrunk ? '1' : '0')}; // Hacer que se vuelva visible solo cuando isShrunk sea true
  transition: opacity 0.5s ease; // Animación más suave al aparecer
  border-radius: 50%; /* Hace la imagen redonda */

`;

const Marca = styled.h1`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
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
    transition: width 0.4s ease-in-out, box-shadow 0.4s ease-in-out; // Transiciones más suaves
    box-shadow: 0px 0px 15px 0.5px var(--color-accent);
  }

  &:hover::after {
    width: 100%;
  }
`;

const SectionContacto = styled.section`
  /* Estilos para la sección de contacto si es necesario */
`;

const Header = () => {
  const [activeLink, setActiveLink] = useState('#miportafolio');
  const [isShrunk, setIsShrunk] = useState(false); // Nuevo estado para controlar el tamaño del logo
  const [showProfileImage, setShowProfileImage] = useState(false); // Nuevo estado para controlar la visibilidad de la imagen de perfil

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    setIsShrunk(scrollPos > 50); // Cambia el tamaño si el scroll es mayor a 50px
    setShowProfileImage(scrollPos > 100); // Mostrar imagen de perfil cuando se haga scroll más allá de 100px

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
        <Logo src="/img/logo.gif" alt="Logo de Portafolio" isShrunk={isShrunk} />
        {showProfileImage && (
          <ProfileImage
            src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4"
            alt="Foto de Perfil"
            isShrunk={isShrunk}
          />
        )}
        <NavLink href="#miportafolio" $isActive={activeLink === '#miportafolio'}>
          Mi Portafolio
        </NavLink>
      </Marca>
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
        <NavLink href="#proyectos" $isActive={activeLink === '#proyectos'}>
          Proyectos
        </NavLink>
      </Nav>
      <SectionContacto>
        <NavLink href="#contacto" $isActive={activeLink === '#contacto'}>
          Contacto
        </NavLink>
      </SectionContacto>
    </HeaderContainer>
  );
};

export default Header;
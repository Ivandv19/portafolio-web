import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUser, FaToolbox, FaGamepad, FaBookOpen, FaFolderOpen, FaEnvelope } from 'react-icons/fa'; // Importa los íconos necesarios
import { FaBriefcase } from 'react-icons/fa';

const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--color-primary);
  color: var(--color-text);
  border-bottom: 3px solid var(--color-accent);
  box-shadow: 0px -3px 15px 1px var(--color-accent);
  position: fixed;
  top: 0; // Header fijo en la parte superior
  z-index: 1000;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0;
    bottom: 0; // Reubica el header en la parte inferior en pantallas móviles
    top: auto; // Ajusta el top para evitar conflictos con bottom
    border-top: 3px solid var(--color-accent);
    box-shadow: 0px 3px 15px 1px var(--color-accent); // Cambia la sombra para coincidir con la ubicación inferior
  }
`;

// Logo con animación para el cambio de tamaño
const Logo = styled.img`
  width: ${({ $isShrunk }) => ($isShrunk ? '50px' : '80px')}; // Ajuste del tamaño según el estado
  opacity: ${({ $isShrunk }) => ($isShrunk ? '0' : '1')};
  transition: width 2s ease, opacity 2s ease;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: ${({ $isShrunk }) => ($isShrunk ? 'none' : 'block')};
    width: 60px;
  }

  @media (max-width: 768px) {
    width: 50px;
  }
`;

// Imagen de perfil con animación de aparición
const ProfileImage = styled.img`
  width: 50px;
  border-radius: 50%;
  transition: opacity 2.3s ease, transform 2.3s ease;

  &.fade-in {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-width: 768px) and (max-width: 900px) {
    display: ${({ $isShrunk }) => ($isShrunk ? 'block' : 'none')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Contenedor de la marca (logo y texto)
const Marca = styled.h1`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 10px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

// Navegación principal
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

// Enlaces de navegación
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  position: relative;
  transition: color 0.3s;

  &::after {
    content: '';
    position: absolute;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')}; // Subrayado dinámico basado en el estado activo
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

// Enlaces con íconos en modo móvil
const IconLink = styled.a`
  color: white;
  text-decoration: none;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
  }
`;

// Navegación en modo móvil
const NavCelulares = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 5px;
`

// Imagen de perfil específica para dispositivos móviles
const ProfileImageMobile = styled.img`
  width: 50px;
  border-radius: 50%;
  transition: opacity 0.5s ease, transform 0.5s ease;
`

// Contenedor para la imagen de perfil en dispositivos móviles
const ImgPerfilContainerMobile = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
  }
`

// Sección de contacto (personalizable para estilos adicionales)
const SectionContacto = styled.section``;


const Header = () => {
  // Estado para el enlace activo (por defecto se establece en '#miportafolio')
  const [activeLink, setActiveLink] = useState('#miportafolio');

  // Estado para detectar si la ventana está en modo móvil (pantalla <= 900px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Estado para definir si el header está en su versión "comprimida" (true si se ha hecho scroll)
  const [Shrunk, setShrunk] = useState(false);

  // useEffect que se ejecuta al montar el componente, para actualizar 'isMobile' cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // Actualiza el estado si la ventana es <= 900px
    };

    // Escucha el evento de redimensionamiento
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar
  }, []);

  // Función para manejar el scroll de la página
  const handleScroll = () => {
    const scrollPos = window.scrollY; // Obtiene la posición de scroll en Y
    setShrunk(scrollPos > 50); // Si se ha desplazado > 50px, se define como "comprimido"

    // Obtiene todas las secciones para determinar en cuál se encuentra el scroll
    const sections = document.querySelectorAll('section');
    let lastActiveLink = activeLink;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop; // Posición superior de la sección
      const sectionHeight = section.offsetHeight; // Altura de la sección

      // Verifica si el scroll actual está dentro de los límites de la sección
      if (scrollPos >= sectionTop - sectionHeight / 3 && scrollPos < sectionTop + sectionHeight / 3) {
        const currentSectionId = `#${section.id}`;
        lastActiveLink = currentSectionId;
      }
    });

    // Actualiza el enlace activo si ha cambiado
    if (lastActiveLink !== activeLink) {
      setActiveLink(lastActiveLink);
    }
  };

  // useEffect que añade un listener de scroll para llamar a handleScroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpia el evento al desmontar
    };
  }, [activeLink]);

  return (
    <HeaderContainer>
      <Marca>
        {Shrunk ? (
          // Muestra imagen de perfil en modo comprimido
          <ProfileImage
            src="https://avatars.githubusercontent.com/u/157653669?v=4"
            alt="Profile Image"
          />
        ) : (
          // Muestra el logo solo en pantallas no móviles
          isMobile ? (
            <>
            </>
          ) : (
            <Logo src="/img/logo.gif" alt="Logo de Portafolio" />
          )
        )}

        {/* Enlace "Mi Portafolio" visible solo en pantallas grandes */}
        {!isMobile && (
          <NavLink href="#miportafolio" $isActive={activeLink === '#miportafolio'}>
            Mi Portafolio
          </NavLink>
        )}
      </Marca>

      {/* Navegación visible solo en pantallas grandes */}
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

      {/* Enlace de contacto visible solo en pantallas grandes */}
      {!isMobile && (
        <SectionContacto>
          <NavLink href="#contacto" $isActive={activeLink === '#contacto'}>
            Contacto
          </NavLink>
        </SectionContacto>
      )}

      {/* Íconos de navegación en modo móvil */}
      {isMobile && (
        <NavCelulares>
          {Shrunk ? (
            // Imagen de perfil en modo comprimido para móviles
            <ImgPerfilContainerMobile href="#miportafolio" $isActive={activeLink === '#miportafolio'}>
              <ProfileImageMobile
                src="https://avatars.githubusercontent.com/u/157653669?v=4"
                alt="Profile Image"
              />
            </ImgPerfilContainerMobile>
          ) : (
            // Icono del logo en modo expandido para móviles
            <IconLink href="#miportafolio" title="Mi Portafolio">
              <Logo src="/img/logo.gif" alt="Logo de Portafolio" />
            </IconLink>
          )}

          {/* Enlaces de iconos en navegación móvil */}
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
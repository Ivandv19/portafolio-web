import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa"; // Importar íconos de GitHub y LinkedIn
import { FaDiscord, FaTwitter } from "react-icons/fa"; // Importar íconos de Discord y Twitter
import styled from "styled-components";

const SectionContainer = styled.section`
  background-color: black;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: center;
    padding: 5vw 2vh 10vw 2vh;
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    justify-content: flex-start;
    padding: 5vw 1vh 10vw 1vh; 
  }
`;

const SectionTitle = styled.h2`
  font-size: 52px;
  margin-bottom: 20px;
  color: var(--color-text);
  font-weight: 700;

  @media (max-width: 480px) {
    // Cambia a móviles
    font-size: 8vw;
  }
`;

const ProfileImage = styled.img`
  width: 150px; 
  border-radius: 50%; 
  margin-bottom: 20px;

  @media (max-width: 480px) {
    // Cambia a móviles
    max-width: 40%;
  }
`;

const Info__SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 0;

  svg {
    color: white; 
    font-size: 20px; 
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    gap: 10px;
  }
`;

const SocialLink = styled.a`
  color: var(--color-text);
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
  gap: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  cursor: pointer;
  position: relative;

  /* Barra debajo del texto que aparece al pasar el mouse */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Ajusta la distancia de la barra al texto */
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--color-secondary); /* Rojo oscuro */
    transition:
      width 0.4s ease,
      left 0.4s ease; /* Animación suave */
  }

  &:hover::after {
    width: 100%; /* La barra se extiende a todo el ancho */
    left: 0; /* La barra se anima desde el centro hacia los extremos */
  }

  &:hover {
    color: var(--color-text); /* Mantiene el color del texto al hacer hover */
  }

  &:active {
    color: var(--color-accent);
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    font-size: 4vw;
  }
`;

const Info = styled.section`
  max-width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    // Cambia a móviles
    width: 100%;
  }
`;

const Info__titleAndImage = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    // Cambia a tablet
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    flex-direction: column-reverse;
  }
`;

const Info__SectionText = styled.section`
  color: var(--color-text);
  text-align: center;
  font-weight: 200;

  @media (max-width: 768px) {
    // Cambia a tablet
    padding: 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    // Cambia a móviles
    font-size: 3.5vw;
  }
`;

const Highlight = styled.span`
  color: var(
    --color-text
  ); /* Puedes cambiar esto por un color más oscuro o uno que desees */
  font-weight: bold;
`;

const DownloadButton = styled.a`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  padding: 10px 20px;
  margin: 0 auto;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 480px) {
    width: 50vw;
    font-size: 3.5vw;
  }
`;

// Aquí agregamos el contenedor para la flecha
const ArrowDownContainer = styled.div`
  position: absolute;
  bottom: 3vh; /* Posiciona la flecha en la parte inferior */
  animation: bounce 1s infinite; /* Animación de rebote */
  cursor: pointer;

  svg {
    color: white;
    font-size: 40px; /* Tamaño de la flecha */
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  @media (max-width: 900px) {
    // Cambia a tablet
    bottom: 10vh; /* Posiciona la flecha en la parte inferior */
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const HeroSection = () => {
  return (
    <SectionContainer id="miportafolio">
      <Info>
        <Info__titleAndImage>
          <SectionTitle>
            Hola, soy Ivan Cruz y construyo páginas web
          </SectionTitle>
          <ProfileImage
            src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4"
            alt="Foto de perfil"
          />
        </Info__titleAndImage>
        <Info__SectionText>
          Soy un <Highlight>Desarrollador Web Frontend Jr</Highlight> con una
          gran pasión por la <Highlight>tecnología</Highlight>. Me encanta{" "}
          <Highlight>
            crear interfaces atractivas, modernas, funcionales y optimizadas
          </Highlight>{" "}
          utilizando <Highlight>tecnologías actuales y eficaces</Highlight> para{" "}
          <Highlight>mejorar la experiencia del usuario</Highlight>. Estoy en{" "}
          <Highlight>constante aprendizaje</Highlight> para perfeccionar mis{" "}
          <Highlight>habilidades profesionales y personales</Highlight>.
        </Info__SectionText>
        <Info__SocialLinks>
          <SocialLink href="https://github.com/ivandv19" target="_blank">
            <FaGithub /> {/* Ícono de GitHub */}
            GitHub <MdOutlineArrowOutward />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/ivan-cruz-1906mx/"
            target="_blank"
          >
            <FaLinkedin /> {/* Ícono de LinkedIn */}
            LinkedIn <MdOutlineArrowOutward />
          </SocialLink>
          <SocialLink
            href="https://app.aluracursos.com/user/ivanmx19"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.84em"
              height="1em"
              viewBox="0 0 563 671"
            >
              <path
                fill="currentColor"
                d="M491 222v-94h72v526h-72v-74c-50 55-124 91-206 91C133 671 0 551 0 401s133-270 285-270c82 0 156 36 206 91m0 185v-12c-4-110-95-198-207-198c-115 0-215 91-215 204s100 204 215 204c112 0 203-88 207-198"
              />
            </svg>
            Alura <MdOutlineArrowOutward />
          </SocialLink>
          <SocialLink
            href="https://discord.com/users/ivandev19"
            target="_blank"
          >
            <FaDiscord /> {/* Ícono de Discord */}
            Discord <MdOutlineArrowOutward />
          </SocialLink>
          <SocialLink href="https://x.com/Ivandv19" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <g fill="currentColor">
                <path d="M208 216h-48L48 40h48Z" opacity=".2" />
                <path d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z" />
              </g>
            </svg>
            <MdOutlineArrowOutward />
          </SocialLink>
        </Info__SocialLinks>
        {/* Botón de descarga del CV */}
        <DownloadButton href="/cv.pdf" download>
          Descargar CV
        </DownloadButton>
      </Info>

      {/* Flecha que indica desplazarse hacia abajo */}
      <ArrowDownContainer
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <FaArrowDown />
      </ArrowDownContainer>
    </SectionContainer>
  );
};

export default HeroSection;

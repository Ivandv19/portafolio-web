import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importar íconos de GitHub y LinkedIn
import { FaDiscord, FaTwitter } from "react-icons/fa"; // Importar íconos de Discord y Twitter
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 100px 20px;
  background-color: #ecf0f1; /* Color de fondo claro */
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 19px 15px -15px var(--color-secondary); /* Sombra intensa solo en la parte superior */
`;

const SectionTitle = styled.h2`
  font-size: 52px;
  margin-bottom: 20px;
  color: var(--color-primary);
  font-weight: 700;
`;

const ProfileImage = styled.img`
  width: 150px; /* Ajusta el tamaño según prefieras */
  border-radius: 50%; /* Hace la imagen redonda */
  margin-bottom: 20px;
`;

const Info__SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  svg {
    color: var(--color-primary);
  }
`;

const SocialLink = styled.a`
  color: var(--color-primary);
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

  &:hover {
    color: var(--color-secondary); /* Rojo oscuro al pasar el mouse */
  }

  &:active {
    color: var(--color-accent);
  }
`;

const Info = styled.section`
    max-width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Info__titleAndImage = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Info__SectionText = styled.section`
  color: var(--color-background);
  text-align: center;
`;

const Highlight = styled.span`
  color: var(--color-primary); /* Puedes cambiar esto por un color más oscuro o uno que desees */
  font-weight: bold;
`;

const SobreMi = () => {
  return (
    <SectionContainer id="sobre-mi">
      <Info>
        <Info__titleAndImage>
          <SectionTitle>Hola, soy Iván Cruz y construyo páginas web</SectionTitle>
          <ProfileImage src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4" alt="Foto de perfil" />
        </Info__titleAndImage>
        <Info__SectionText>
          Soy un <Highlight>desarrollador web frontend junior</Highlight> con una gran pasión por la <Highlight>tecnología</Highlight>. Me encanta <Highlight>crear interfaces atractivas, modernas, funcionales y optimizadas</Highlight> utilizando <Highlight>tecnologías actuales y eficaces</Highlight> para <Highlight>mejorar la experiencia del usuario</Highlight>. Estoy en <Highlight>constante aprendizaje</Highlight> para perfeccionar mis <Highlight>habilidades profesionales y personales</Highlight>.
        </Info__SectionText>
        <Info__SocialLinks>
          <SocialLink href="https://github.com/tu-usuario" target="_blank">
            <FaGithub /> {/* Ícono de GitHub */}
            GitHub <MdOutlineArrowOutward />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/tu-usuario" target="_blank">
            <FaLinkedin /> {/* Ícono de LinkedIn */}
            LinkedIn <MdOutlineArrowOutward />
          </SocialLink>
          <SocialLink href="https://discord.com/invite/tu-invite" target="_blank">
            <FaDiscord /> {/* Ícono de Discord */}
            Discord <MdOutlineArrowOutward />
          </SocialLink>
          <SocialLink href="https://twitter.com/tu-usuario" target="_blank">
            <FaTwitter /> {/* Ícono de Twitter */}
            Twitter <MdOutlineArrowOutward />
          </SocialLink>
        </Info__SocialLinks>
      </Info>
    </SectionContainer>
  );
};

export default SobreMi;
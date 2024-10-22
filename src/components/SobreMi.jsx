import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 120px 20px; /* Aumentar el padding superior para dejar espacio */
  background-color: #ecf0f1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto; /* Cambiado a auto para que ajuste el tamaño según el contenido */
  justify-content: space-around;

  @media (max-width: 480px) { // Cambia a móviles
    padding: 120px 10px;
  }

`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
  color: var(--color-primary);
  font-weight: 700;
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

  @media (max-width: 480px) { // Cambia a móviles
    font-size: 10vw;
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
  line-height: 20px;

  @media (max-width: 480px) { // Cambia a móviles
    font-size: 4vw;
  }
`;

const Highlight = styled.span`
  color: var(--color-primary); /* Puedes cambiar esto por un color más oscuro o uno que desees */
  font-weight: bold;
`;

const SobreMi = () => {
  return (
    <SectionContainer id="sobremi">
      <Info>
        <Info__titleAndImage>
          <SectionTitle>Sobre Mí</SectionTitle>
        </Info__titleAndImage>
        <Info__SectionText>
          Soy <Highlight>Ivan Cruz</Highlight>, tengo <Highlight>22 años</Highlight> y soy de <Highlight>Chimalhuacán, Edomex, México</Highlight>. Desde muy pequeño, me interesé en el mundo de la <Highlight>tecnología</Highlight>. Cursé la <Highlight>preparatoria </Highlight> en una <Highlight>carrera técnica</Highlight> que me proporcionó las <Highlight> bases de la informática</Highlight>. Sin embargo, <Highlight> la pandemia </Highlight>  me llevó a <Highlight>dejar la universidad </Highlight> , lo que me impulsó hacia un <Highlight>aprendizaje autodidacta</Highlight>.
          <br />
          <br />
          Decidí inscribirme en <Highlight>cursos especializados</Highlight> en <Highlight>desarrollo frontend</Highlight> de páginas web, lo que me permitió conocer diversos <Highlight>conceptos, técnicas y tecnologías</Highlight> enfocadas en el desarrollo web. Además, tuve la oportunidad de  <Highlight> crear varios proyectos</Highlight>, lo que me brindó <Highlight> valiosa experiencia</Highlight> en el campo. Actualmente, estoy en <Highlight> busca de oportunidades</Highlight> para entrar al <Highlight>mercado laboral</Highlight>.
        </Info__SectionText>
      </Info>
    </SectionContainer>
  );
};

export default SobreMi;
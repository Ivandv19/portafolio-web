
import styled from 'styled-components'
import './App.css'
import Contacto from './components/Contacto'
import Formacion from './components/Formacion'
import Header from './components/Header'
import Hobbies from './components/Hobbies'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import SobreMi from './components/SobreMi'
import GlobalStyle from './styles/GlobalStyles'



function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <SobreMi />
      <Skills />
      <Hobbies />
      <Formacion />
      <Proyectos />
      <Contacto />
    </>
  )
}

export default App

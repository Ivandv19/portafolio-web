
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
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <SobreMi />
      <Skills />
      <Hobbies />
      <Formacion />
      <Proyectos />
      <Contacto />
      <Footer/>
    </>
  )
}

export default App

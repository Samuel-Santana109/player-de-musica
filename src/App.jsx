import { Header } from './componentes/Header'
import { Section_um } from './componentes/section_um'
import { Section_dois } from './componentes/section_dois'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Section_um />
      <Section_dois />
      {/*Essses <h1> e o <a> foram so para explicar pode apagar */}
      <h1>Estou pegando como base da tela inicial o deezer</h1>
      <a href='https://www.deezer.com/br/offers/premium'>Deezer site </a>
    </>
  )
}

export default App

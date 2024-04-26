import NavBar from './Components/NavBar'
import Card from './Components/Card'
import './Module.css'
import Italo from './assets/profiles/italoDaniel.png'
import Cael from './assets/profiles/cael.png'
import Bituca from './assets/profiles/bituca.png'

function App() {

  return (
    <main>
      <NavBar />
      <div className="container">
      <Card imagem={Italo} 
      altImg="Foto Hash" 
      nome="Hash"
      conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam quos ex libero pariatur accusamus explicabo a,
        obcaecati voluptatibus repellendus,
        tenetur sint esse suscipit! Beatae, 
        nihil perspiciatis magnam saepe accusantium pariatur."
      />
      <Card imagem={Cael} 
      altImg="Foto Cael" 
      nome="Cael"
      conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam quos ex libero pariatur accusamus explicabo a,
        obcaecati voluptatibus repellendus,
        tenetur sint esse suscipit! Beatae, 
        nihil perspiciatis magnam saepe accusantium pariatur."
      />
      <Card imagem={Bituca} 
      altImg="Foto Bituca" 
      nome="Bituca"
      conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam quos ex libero pariatur accusamus explicabo a,
        obcaecati voluptatibus repellendus,
        tenetur sint esse suscipit! Beatae, 
        nihil perspiciatis magnam saepe accusantium pariatur."
      />
      </div>
    </main>
  )
}

export default App

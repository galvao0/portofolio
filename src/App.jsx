import './App.css'
import icongit from '../src/assets/images/git.png'
import iconlinkdin from '../src/assets/images/linkdin.png'
import imgDev from '../src/assets/images/dev.png'

function App() {

  return (
    <main>
      <section>
        <p>
          Olá! Seja bem-vindo ao meu portfolio.
        </p>
        <p>
          Menu nome é <span>fulano</span> e eu sou um desenvolvedor web
        </p>
        <div id="redes-sociais">
          <a href='#'>
            <img src={icongit} alt="git" srcSet='' />
          </a>
          <a href='#'>
            <img src={iconlinkdin} alt='linkdin' srcSet='' />
          </a>
        </div>
        <a href='#sobremim'>
          <button>Conheça mais sobre mim</button>
        </a>
      </section>
      <section>
        <img id='imagemDev' src={imgDev} alt='dev' srcSet='' />
      </section>
    </main>
  )
}

export default App

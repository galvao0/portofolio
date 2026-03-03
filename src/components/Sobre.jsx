import './Sobre.css'

export const Sobre = ({categoria}) => {
    return (
        <div id={categoria}>
            <div id='resumo'>
                <h2>Sobre mim</h2>
                <p>
                    Meu nome é fulano e eu estudo desenvolvimento web desde janeiro de 2024. Comecei meus estudos em HTML/CSS e hoje tenho conhecimento de diversas tecnologias.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut maximus velit. Quisque tellus erat, scelerisque sodales sem ac, eleifend molestie lacus. Quisque nec urna vitae dolor vehicula finibus vel et metus. Vestibulum sollicitudin sem molestie turpis gravida, quis maximus mi auctor. 
                </p>
            </div>

            <div id='meus-conhecimentos'>
                <h2>Meus conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </div>
    )
}
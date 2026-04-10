import '../components/SobreMi.css';
import fotoPerfil from '../components/imagenes/Oswaldo.png';


export function SobreMi() {
    return (
        <>
            <section id="sobre-mi" className="about-section">
                <div className="container">
                    <div className="about-content">
                        <span className="sub-title">Un poco sobre mí</span>
                        <h1>Técnico Universitario en Informática</h1>
                        
                        <p>
                            Apasionado por construir soluciones digitales eficientes y elegantes. 
                            Mi enfoque combina la base lógica de mi formación académica con un 
                            desarrollo frontend moderno y sólido.
                        </p>
                        
                        <p>
                            Especializado en el desarrollo web, con un enfoque particular en 
                            crear experiencias de usuario fluidas y mantenibles.
                        </p>

                        <div className="skills-box">
                            <h3>Mis Tecnologías Clave</h3>
                            <ul className="skills-list">
                                <li><i className="dev-icon"></i> HTML & CSS</li>
                                <li><i className="dev-icon"></i> JavaScript (ES6+)</li>
                                <li><i className="dev-icon accent-skill"></i> React.js</li>
                                <li><i className="dev-icon accent-skill"></i> Laravel</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="image-wrapper">
                            {/* En JSX la etiqueta img DEBE cerrarse con /> */}
                            <img 
                                src={fotoPerfil}
                                alt="Foto de Oswaldo" 
                                className="profile-pic" 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
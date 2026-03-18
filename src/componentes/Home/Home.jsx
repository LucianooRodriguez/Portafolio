import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    // Te sugiero mover estas imágenes a la carpeta /public/ para acceso directo
    const foto = "/imagenes/FotoPerfil.jpg";
    const Wpp = "/imagenes/whatsapp.png";
    const lk = "/imagenes/linkedin.png";
    const git = "/imagenes/github.png";

    return (
        <main className="home-container">
            <div className="bento-grid">
                
                {/* Bloque 1: Perfil */}
                <div className="bento-item profile-card">
                    <div className="profile-img-container">
                        <img className="fotoPerfil" src={foto} alt="Luciano Rodriguez" />
                    </div>
                    <h1 className="nombre">Luciano Matias Rodriguez</h1>
                    <p className="subtitulo">Estudiante de Ingeniería en Sistemas</p>
                    
                    <div className="social-links">
                        <a href="https://api.whatsapp.com/send/?phone=1122445079" target="_blank" rel="noreferrer">
                            <img className="social-icon" src={Wpp} alt="Whatsapp" />
                        </a>
                        <a href="https://www.linkedin.com/in/luciano-rodriguez-bb2174269/" target="_blank" rel="noreferrer">
                            <img className="social-icon" src={lk} alt="Linkedin" />
                        </a>
                        <a href="https://github.com/LucianooRodriguez" target="_blank" rel="noreferrer">
                            <img className="social-icon" src={git} alt="Github" />
                        </a>
                    </div>
                </div>

                {/* Bloque 2: Introducción */}
                <div className="bento-item about-card">
                    <h2 className="titulo-seccion">Sistemas & Data</h2>
                    <p className="texto-bio">
                        Hola, bienvenido/a. Estoy en la etapa final de mi carrera de Ingeniería. 
                        Busco nuevas experiencias para aportar mi visión técnica y analítica, 
                        creciendo profesionalmente en entornos desafiantes.
                    </p>
                    <div className="action-buttons">
                        <Link to="/Curriculum" className="btn-modern">Curriculum</Link>
                        <Link to="/Proyectos" className="btn-modern secondary">Proyectos</Link>
                    </div>
                </div>

                {/* Bloque 3: Mini Badge de Tech (El "chiche" extra) */}
                <div className="bento-item tech-stack-container">
                    <h3 className="stack-title">Stack Profesional</h3>
                    
                    <div className="stack-grid">
                        <div className="stack-group">
                            <span className="group-label">Software Engineering</span>
                            <p>React • Node.js • Java • Docker • CI/CD</p>
                        </div>
                        
                        <div className="stack-group">
                            <span className="group-label">Data Engineering & BI</span>
                            <p>SQL • Microsoft Fabric • Power BI • ETL/ELT</p>
                        </div>
                        
                        <div className="stack-group">
                            <span className="group-label">AI & Automation</span>
                            <p>Python (Pandas/Scikit-learn) • AI Agents • Power Automate</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home;
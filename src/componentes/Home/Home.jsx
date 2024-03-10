import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const foto= "../imagenes/FotoPerfil.jpg";
    const Wpp= "../imagenes/whatsapp.png";
    const lk= "../imagenes/linkedin.png";
    const git= "../imagenes/github.png";
    return (
        <main class="bloqueprincipal">
            <div class="card text-bg-dark">
                <video className="video" src=""></video>
                <div class="card-img-overlay">
                    <div class="row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <div class="bloque1 card">
                                <div class=" card-body">
                                    <img class="fotoPerfil" src={foto} alt="FotoPerfil" />
                                    <h5 class="nombre card-title">Luciano Matias Rodriguez</h5>
                                    <p class="card-text">Estudiante de Ingeniería en Sistemas</p>
                                    <Link to={"https://api.whatsapp.com/send/?phone=1122445079&text&type=phone_number&app_absent=0"} >     
                                        <img className="whatsapp1" src={Wpp} alt="" />
                                    </Link>
                                    <Link to={"https://www.linkedin.com/in/luciano-rodriguez-bb2174269/"} >     
                                        <img className="linkedin1" src={lk} alt="" />
                                    </Link>

                                    <Link to={"https://github.com/LucianooRodriguez"} >     
                                        <img className="git1" src={git} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 divgrande">
                            <h5 class="titulo card-title">Portafolio</h5> 
                            <div class="bloque2 card">
                               <div class=" card-body">     
                                    <p class="card-text">
                                        Hola bienvenido/a a mi perfil, soy estudiante de la carrera Ingeniería en Sistemas ya en su última etapa. 
                                        Armo este portafolio con el propósito de abrirme al mercado laboral ya que considero que una nueva experiencia me ayudaría a crecer desde lo profesional para poder tener un punto de vista distinto a lo ya aprendido en mi rol actual. 
                                        Por esto, comparto mi Curriculum y mis proyectos realizados para que me conozcas mejor.</p>
                                        <a href="../Curriculum" class="btn btn-primary boton1">Curriculum</a> 
                                        <a href="../Proyectos" class="btn btn-primary boton1">Proyectos</a>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
           


        </main>
    )
}

export default Home
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    const mail= "../imagenes/email.png";
    const Wpp= "../imagenes/whatsapp.png";
    const lk= "../imagenes/linkedin.png";
    const git= "../imagenes/github.png";
    return (
        <footer>
            <div class="container text-center footer">
                    <div class="row">
                        <div class="col">
                            <blockquote class="blockquote mb-0">                                
                                <Link to={"mailto:lucianoorodriguez@outlook.es"} >     
                                    <img className="icono" src={mail} alt="" />
                                </Link>
                                <Link to={"https://api.whatsapp.com/send/?phone=1122445079&text&type=phone_number&app_absent=0"} >     
                                    <img className="icono" src={Wpp} alt="" />
                                </Link>
                                <Link to={"https://www.linkedin.com/in/luciano-rodriguez-bb2174269/"} >     
                                    <img className="icono" src={lk} alt="" />
                                </Link>

                                <Link to={"https://github.com/LucianooRodriguez"} >     
                                    <img className="icono" src={git} alt="" />
                                </Link>
                            
                            </blockquote>
                        </div>
                        <p class="copyright">©Creado por Luciano Rodriguez</p>                            
                    </div>
                
            </div>
        </footer>
    )
}

export default Footer
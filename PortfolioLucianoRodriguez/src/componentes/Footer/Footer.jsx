import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div class="container text-center footer">
                    <div class="row">
                        <div class="col">
                            <blockquote class="blockquote mb-0">                                
                                <Link to={"mailto:lucianoorodriguez@outlook.es"} >     
                                    <img className="icono" src="public\imagenes\email.png" alt="" />
                                </Link>
                                <Link to={"https://api.whatsapp.com/send/?phone=1122445079&text&type=phone_number&app_absent=0"} >     
                                    <img className="icono" src="public\imagenes\whatsapp.png" alt="" />
                                </Link>
                                <Link to={"https://www.linkedin.com/in/luciano-rodriguez-bb2174269/"} >     
                                    <img className="icono" src="./public/imagenes/linkedin.png" alt="" />
                                </Link>

                                <Link to={"https://github.com/LucianooRodriguez"} >     
                                    <img className="icono" src="./public/imagenes/github.png" alt="" />
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
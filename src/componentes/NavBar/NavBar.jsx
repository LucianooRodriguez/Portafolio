import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
   
    return (
        <header> 
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
                <Link to={"/"} >
                    <p className='nombre2'>Luciano Rodriguez</p>     
                </Link>
                    
                
                <div className="container-fluid"> 
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/"} className="Link"> Sobre mí </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Curriculum"} className="Link"> Curriculum </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Proyectos"} className="Link"> Proyectos </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Contacto"} className="Link"> Contacto </NavLink>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>


        </header>
    )
}

export default NavBar
import './index.css';
import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';
import Curriculum from './componentes/Curriculum/Curriculum';
import Proyectos from './componentes/Proyectos/Proyectos';
import Contacto from './componentes/Contacto/Contacto';
import Error from './componentes/Error/Error';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Curriculum' element={<Curriculum />} />
            <Route path='/Proyectos' element={<Proyectos />} />
            <Route path='/Contacto' element={<Contacto/>} />
            <Route exact path="*" element={<Error />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

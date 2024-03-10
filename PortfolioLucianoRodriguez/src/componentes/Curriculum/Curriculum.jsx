import './Curriculum.css'

const Curriculum = () => {
   
    return (
        <header>
            <div class="card text-bg-dark">
                        <div class="row col-sm-12 d-flex justify-content-center">
                            <h5 class="titulo card-title">Curriculum</h5> 
                                <div class="bloque3 card">
                                    <div class=" card-body">     
                                            <p class="card-text">En esta sección, mediante la descarga del CV, tengo la posibilidad de contar mas sobre mi, ya que detallo cuales son mis estudios y la experiencia laboral hasta el momento, como también los cursos realizados y el avance sobre ellos.</p>
                                            <a href="public\CurriculumPDF\LucianoRodriguez.CV.pdf" class="btn btn-primary boton1">Descargar Curriculum</a>
                                    </div>
                                </div>
                        </div>
            </div>
        </header>
    )
}

export default Curriculum
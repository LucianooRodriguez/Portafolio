import './Curriculum.css'

const Curriculum = () => {
    // Vite sirve la carpeta public desde la raíz
    const cvPath = "/CurriculumPDF/LucianoRodriguez(CV).pdf";

    return (
        <section className="curriculum-container">
            <h1 className="titulo-seccion">Trayectoria Profesional</h1>
            
            <div className="cv-card">
                <div className="cv-icon">
                    {/* Icono de documento (podes usar una imagen o emoji) */}
                    📄
                </div>
                <div className="cv-content">
                    <p className="cv-text">
                        En mi CV detallo mi formación como <strong>Ingeniero en Sistemas</strong>, 
                        mi experiencia actual en análisis de datos y la evolución de mis 
                        competencias técnicas en automatización y BI.
                    </p>
                    <div className="cv-badges">
                        <span>Educación</span>
                        <span>Experiencia</span>
                        <span>Certificaciones</span>
                    </div>
                    <a 
                        href={cvPath} 
                        download="CV_Luciano_Rodriguez.pdf" 
                        className="btn-download"
                    >
                        Descargar Curriculum (PDF)
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Curriculum;
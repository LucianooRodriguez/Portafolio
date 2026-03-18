import './Proyectos.css'

const Proyectos = () => {
const proyectosData = [
        {
            titulo: "DS TRAVEL",
            subtitulo: "Diseño de Sistemas - UTN",
            desc: "Sistema integral de gestión para empresa de viajes. Implementación de lógica de negocio compleja y arquitectura de capas.",
            repo: "https://github.com/nicolleras/TPCampo",
            link: null
        },
        {
            titulo: "Aseguradora NPBrokers",
            subtitulo: "JavaScript Moderno",
            desc: "Aplicación interactiva para cotización de seguros. Uso avanzado de DOM, eventos y persistencia de datos local.",
            repo: "https://github.com/LucianooRodriguez/CursoJavascript",
            link: "https://lucianoorodriguez.github.io/CursoJavascript/"
        },
        {
            titulo: "Vixion AudioVisual",
            subtitulo: "Desarrollo Web",
            desc: "Sitio web responsive aplicando metodologías ágiles y optimización SEO. Primer proyecto integrador de diseño y estructura.",
            repo: "https://github.com/LucianooRodriguez/Proyecto_Dw_coderhouse",
            link: "https://lucianoorodriguez.github.io/Proyecto_Dw_coderhouse/"
        },
        {
            titulo: "Backend API MyProject",
            subtitulo: "Node.js & Express",
            desc: "Desarrollo de arquitectura de servidor, manejo de sesiones, seguridad y bases de datos para sistemas escalables.",
            repo: "https://github.com/LucianooRodriguez/Programaci-n-Backend-Entregas",
            link: null
        },
        {
            titulo: "Dashboard Cosechas",
            subtitulo: "Tableau BI",
            desc: "Visualización de datos agrícolas. Creación de dashboards interactivos para la toma de decisiones estratégicas basadas en rendimientos.",
            repo: null,
            link: "https://public.tableau.com/app/profile/luciano4934/viz/ConexinRodriguezLuciano/DESAFIO"
        },
        {
            titulo: "Dashboard Encuesta CABA",
            subtitulo: "Data Processing - Excel",
            desc: "Procesamiento y limpieza de grandes volúmenes de datos. Automatización de reportes y análisis de tendencias demográficas.",
            repo: null,
            link: "https://www.dropbox.com/s/qtvbo0icy2y2ik3/71494-48395-entrega-del-proyecto-final--pfrodriguezluciano.xlsx?e=2&dl=0"
        },
        {
            titulo: "Análisis NPBrokers",
            subtitulo: "Data Analytics",
            desc: "Dashboard integral de métricas de seguros. Identificación de KPIs clave y patrones de comportamiento de cartera.",
            repo: null,
            link: "https://drive.google.com/drive/folders/1_VjhJzqlAXh6xommAKdhpgkFhmCr5sd6?usp=sharing"
        }
    ];

    return (
        <main className="proyectos-section">
            <h1 className="titulo-proyectos">Proyectos Destacados</h1>
            
            <div className="proyectos-grid">
                {proyectosData.map((proy, index) => (
                    <div className="parent" key={index}>
                        <div className="card-3d">
                            <div className="logo-3d">
                                <span className="circle-3d c3"></span>
                                <span className="circle-3d c4"></span>
                                <span className="circle-3d c5">🚀</span>
                            </div>
                            <div className="glass-3d"></div>
                            <div className="content-3d">
                                <span className="title-3d">{proy.titulo}</span>
                                <span className="category-3d">{proy.subtitulo}</span>
                                <p className="text-3d">{proy.desc}</p>
                            </div>
                            <div className="bottom-3d">
                                {proy.link && <a href={proy.link} target="_blank" rel="noreferrer" className="btn-proy">Web</a>}
                                {proy.repo && <a href={proy.repo} target="_blank" rel="noreferrer" className="btn-proy secondary">Repo</a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Proyectos;
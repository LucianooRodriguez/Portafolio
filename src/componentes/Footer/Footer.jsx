import './Footer.css';

const Footer = () => {
    // Referencias directas a la carpeta public (Vite las sirve desde /)
    const mail = "/imagenes/email.png";
    const Wpp = "/imagenes/whatsapp.png";
    const lk = "/imagenes/linkedin.png";
    const git = "/imagenes/github.png"; // <-- VERIFICÁ SI ES .png o .svg en tu carpeta

    return (
        <footer className="footer-modern">
            <div className="footer-container">
                <div className="footer-socials">
                    <a href="mailto:lucianoorodriguez@outlook.es">
                        <img className="footer-icon" src={mail} alt="Email" />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=1122445079" target="_blank" rel="noreferrer">
                        <img className="footer-icon" src={Wpp} alt="WhatsApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/luciano-rodriguez-bb2174269/" target="_blank" rel="noreferrer">
                        <img className="footer-icon" src={lk} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/LucianooRodriguez" target="_blank" rel="noreferrer">
                        <img className="footer-icon" src={git} alt="GitHub" />
                    </a>
                </div>
                <p className="footer-copy">
                    © {new Date().getFullYear()} — Diseñado por Luciano Rodriguez
                </p>
            </div>
        </footer>
    );
};

export default Footer;
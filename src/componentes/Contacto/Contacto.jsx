import './Contacto.css'

const Contacto = () => {
    return (
        <main className="contacto-container">
            <h1 className="titulo-contacto">Hablemos</h1>
            <div className="glass-form-container">
                <form className="contacto-form">
                    <div className="form-group">
                        <label htmlFor="nombres">Nombre Completo</label>
                        <input type="text" id="nombres" placeholder="Ej: Juan Pérez" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="tu@email.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" id="asunto" placeholder="Oportunidad laboral / Consulta" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" rows="4" placeholder="¿En qué puedo ayudarte?"></textarea>
                    </div>

                    <button type="submit" className="btn-enviar">Enviar Mensaje</button>
                </form>
            </div>
        </main>
    )
}

export default Contacto;
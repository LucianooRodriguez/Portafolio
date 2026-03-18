import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = ({ errormsg }) => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <div className="error-message">
                    {errormsg ? errormsg : "PAGE NOT FOUND"}
                </div>
                <p className="error-description">
                    Parece que la ruta que buscas no existe en el sistema.
                </p>
                <Link to="/" className="btn-back">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default Error;
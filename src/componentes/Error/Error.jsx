import React from "react";
import { Link } from "react-router-dom";

const Error = ({ errormsg }) => {
    return (
        <>
            <div justifyContent="center">
                {errormsg ? errormssg : "PAGE NOT FOUND - Error 404 -"}
            </div>
            <div justifyContent="center">
                <Link to="/">
                    <Button> Volver al inicio </Button>
                </Link>
            </div>
        </>
    );
};

export default Error;
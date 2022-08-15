import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
    return (
        <Link to="/" className="Logo">
            {props.children}
        </Link>
    )
};

export default Logo; 
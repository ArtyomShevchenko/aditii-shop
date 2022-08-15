import React from "react";
import { Link } from "react-router-dom";

const navList = ["home", "sale", "handbags", "wallets", "accessories", "menu store", "shoes", "vintage", "services", "contact us"];

const Navigation = (props) => {
    return (
        <ul className="Navigation">
            <div className="wrapper">
                {navList.map((element, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/${element.replace(/\s/g, '')}`}>{element}</Link>
                        </li>
                    )
                })}
            </div>
        </ul>
    )
};

export default Navigation;
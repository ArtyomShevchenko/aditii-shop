import React from "react";
import Logo from "../Components/Logo";
import Search from "../Components/Search";
import Basket from "../Components/Basket";
import Navigation from "../Components/Navigation";

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="content">
                        <Logo>Aditii</Logo>
                        <Search />
                        <Basket />
                    </div>
                </div>
                <Navigation />
            </div>
        </header>
    )
};

export default Header;
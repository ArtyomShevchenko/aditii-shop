import React from "react";
import Context from "../Context";

const Basket = (props) => {
    const context = React.useContext(Context);

    return (
        <div className="Home-container">
            <div className="container">
                <h2>
                    <div className="wrapper">
                        Basket
                    </div>
                </h2>
                <div className="wrapper">
                    <div className="cards">
                        {context.basket.map((element, index) => {
                            return (
                                <section className="card" key={index}>
                                    <img src={require("../i/" + element.image)} alt="Image" />
                                    <h3>{element.title}</h3>
                                    {/* <p>{element.description}</p> */}
                                    <div>
                                        <div className="card__price">${element.price}</div>
                                        <button>Buy now</button>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Basket;
import React from "react";
import Context from "../Context";
import db from "../db";

const Shoes = (props) => {
    const context = React.useContext(Context);
    const shoes = db.filter(element => element.type === "shoes")

    const handleclick = (i) => {
        context.basket.push(shoes[i])
        context.forceUpdate()
    }

    return (
        <div className="Home-container">
            <div className="container">
                <h2>
                    <div className="wrapper">
                        shoes
                    </div>
                </h2>
                <div className="wrapper">
                    <div className="cards">
                        {shoes.map((element, index) => {
                            return (
                                <section className="card" key={index}>
                                    <img src={require("../i/" + element.image)} alt="Image" />
                                    <h3>{element.title}</h3>
                                    <p className="discription" style={{ fontSize: "1.5rem", display: "none" }}>{element.description}</p>
                                    <div>
                                        <div className="card__price">${element.price}</div>
                                        <button onClick={() => handleclick(index)}>Buy now</button>
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

export default Shoes;
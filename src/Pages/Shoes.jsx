import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import db from "../db";
import styled from "styled-components";

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
                            console.log(element)
                            return (
                                <>
                                    <div onClick={() => console.log(element)}
                                        {...element}
                                    >
                                        {index}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Shoes;


/* <section className="card" key={index}>
                                    {/* <img src={require("../i/" + element.image)} alt="Image" />
                                    <h3>{element.title}</h3>
                                    <p className="discription" style={{ fontSize: "1.5rem", display: "none" }}>{element.description}</p>
                                    <div>
                                        <div className="card__price">${element.price}</div>
                                        <button onClick={() => handleclick(index)}>Buy now</button>
                                    </div> 
                                </section>
                                */
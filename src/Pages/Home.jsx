import React from "react";
import Context from "../Context"
import db from "../db";

const Home = (props) => {
    const context = React.useContext(Context);

    const handleclick = (i) => {
        context.basket.push(db[i])
    }

    return (
        <div className="Home-container">
            <div className="container">
                <h2>
                    <div className="wrapper">
                        FEATURED pRODUCTS
                    </div>
                </h2>
                <div className="wrapper">
                    <div className="cards">
                        {db.map((element, index) => {
                            return (
                                <section className="card" key={index}>
                                    <img src={require("../i/" + element.image)} alt="Image" />
                                    <h3>{element.title}</h3>
                                    {/* <p>{element.description}</p> */}
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

export default Home;
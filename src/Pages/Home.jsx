import React from "react";
import Context from "../Context";
import Swiper from "../Components/Swiper";
import Carusel from "../Components/Carusel";

const Home = (props) => {
    const context = React.useContext(Context);

    const handleclick = (i) => {
        context.basket.push(context.homePageArr[i])
        context.forceUpdate()
    }

    const swiperArr = context.swiperArr

    return (
        <div className="Home-container">
            <Carusel />
            <Swiper swiperArr={swiperArr} />
            <div className="container">
                <h2>
                    <div className="wrapper">
                        FEATURED pRODUCTS
                    </div>
                </h2>
                <div className="wrapper">
                    <div className="cards">
                        {context.homePageArr.map((element, index) => {
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
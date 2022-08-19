import React from "react";
import Context from "../Context";
import Card from "../Components/Card";

const Basket = (props) => {
    const context = React.useContext(Context);
    const [backetArr, setBacketArr] = React.useState(context.basket);

    return (
        <div className="Basket-container">
            <div className="container">
                <h2>
                    <div className="wrapper">
                        Basket
                    </div>
                </h2>
                <div className="wrapper">
                    <div className="content">
                        <div className="cards cards_basked">
                            {backetArr.map((element, index) => {
                                const data = {
                                    element: element,
                                    index: index,
                                    f: setBacketArr,
                                }
                                return (
                                    <Card {...data} key={index} />
                                )
                            })}
                        </div>

                        <div className="basket-total">{context.allCost() === 0 ? "There are no products in the cart" : `Total: $${context.allCost()}`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Basket;
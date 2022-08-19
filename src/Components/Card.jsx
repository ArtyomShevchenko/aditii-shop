import React from "react";
import Context from "../Context";

const Card = (props) => {
    const context = React.useContext(Context);

    const handleClickRemove = (index) => {
        const arr = context.basket.filter((e, i) => i !== props.index)
        props.f(arr)
        context.basket = arr;
    }

    return (
        < section className="card">
            <img src={require("../i/" + props.element.image)} alt="Image" />
            <div>
                <h3>{props.element.title}</h3>
                {/* <p>{props.element.description}</p> */}
                <div>
                    <span className="card__price">${props.element.price}</span>
                    <button onClick={() => handleClickRemove(props.index)}>Remove</button>
                </div>
            </div>
        </ section>
    )
}

export default Card;


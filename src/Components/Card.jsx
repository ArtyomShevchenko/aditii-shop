import React from "react";
import Context from "../Context";
import styled from "styled-components";

const Card = (props) => {
    const context = React.useContext(Context);

    const handleClickRemove = (index) => {
        const arr = context.basket.filter((e, i) => i !== props.index)
        props.f(arr)
        context.basket = arr;
    }

    return (
        <Styled>
            < img src={require("../i/" + props.element.image)
            } alt="Image" />
            <div>
                <h3>{props.element.title}</h3>
                {/* <p>{props.element.description}</p> */}
                <div>
                    <span className="card__price">${props.element.price}</span>
                    <button onClick={() => handleClickRemove(props.index)}>Remove</button>
                </div>
            </div>
        </Styled>
    )
}

export default Card;

const Styled = styled.section`
max-height: 300px;
width: 100%;
aspect-ratio: 1/1;
border: 0.1rem solid lightgray;
border-bottom: 0.5rem solid var(--green);
border-radius: 0.3rem;
box-shadow: 0 0 0.3rem lightgray;
padding: 25px 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 1rem;
color: var(--gray);
font-size: 2.5rem;
line-height: 2.7rem;
font-weight: bold;
text-align: center;

background: red;

div {
    display: flex;
    gap: 1rem;
    align-items: center;
}

img {
    width: 100%;
    min-height: 120px;
    height: 100%;
    object-fit: contain;
    object-position: center;
}`
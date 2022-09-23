import React from "react";
// import Context from "../Context";
import styled from "styled-components";

const Card = (props) => {
    // const context = React.useContext(Context);

    // const handleClickRemove = (index) => {
    //     const arr = context.basket.filter((e, i) => i !== props.index)
    //     props.f(arr)
    //     context.basket = arr;
    // }

    return (
        <Styled>
            <Img>
                {props.image
                    ? <img src={require("../i/" + props.image)} alt="Image" />
                    : <div>no props.image</div>}
            </Img>
            <h3>
                {props.title ? props.title : "no props.title"}
            </h3>
            {props.children
                ? <div>
                    <span>${props.price ? props.price : "no props.price"}</span>
                    {props.children}
                </div>
                : false}
            {/* <button onClick={() => handleClickRemove(props.index)}>Remove</button> */}
            {/* {<p>{props.description ? props.description : "no props.description"}</p>} */}
        </Styled>
    )
}

export default Card;

const Styled = styled.section`
min-height: 200px;
max-height: 300px;
width: 100%;
aspect-ratio: 1/1;
border: 0.1rem solid var(--color3);
border-bottom: 0.5rem solid var(--color5);
border-radius: 0.2rem;
padding: 2.5rem 5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 1rem;

color: var(--color3);
font-size: 2.5rem;
line-height: 2.7rem;
font-weight: bold;
text-align: center;

button {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    border: none;
    background-color: var(--color5);
    border-radius: 0.5rem;
    color: var(--color4);
    cursor: pointer;
    transition: box-shadow 0.2s;
}

div {
    display: flex;
    align-items: center;
    gap: 1rem;
}
`;

const Img = styled.div`
width: 100%;
height: 100%;
min-height: 100px;
min-width: 100px;
position: relative;
display: flex;
align-items: center;
justify-content: center;

img {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: contain;
}
`;

// <Img>
//     < img src={require("../i/" + props.element.image)} alt="Image" />
// </Img>
// <div>
//     <h3>{props.element.title}</h3>
//     <div>
//         <span className="card__price">${props.element.price}</span>
//         <button onClick={() => handleClickRemove(props.index)}>Remove</button>
//     </div>
//     {/* {<p>{props.element.description}</p>} */}
// </div>
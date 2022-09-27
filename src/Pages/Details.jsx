import React from "react";
import Title from "../Components/Title";
import styled from "styled-components";

const Details = ({ props }) => {
    console.log(props)
    return (
        <Styled className="Details-container">
            <Title>
                {props.title}
            </Title>
            <div className="wrapper">
                <Img>
                    <img src={require("../i/" + props.image)} alt="Image" />
                </Img>
                <p>{props.type}</p>
                <p>{props.description}</p>
            </div>
        </Styled>
    );
}

export default Details;

const Styled = styled.section`


color: var(--color1);
font-size: 2.5rem;
line-height: 2.7rem;
font-weight: bold;
text-align: start;

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
}`;

const Img = styled.div`
width: 100%;
height: 100%;

min-height: 300px;
min-width: 300px;
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
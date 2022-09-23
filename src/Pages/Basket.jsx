import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import Title from "../Components/Title";
import styled from "styled-components";

const Basket = (props) => {
    const context = React.useContext(Context);
    const [backetArr, setBacketArr] = React.useState(context.basket);

    console.clear()

    // React.useEffect(() => {
    //     context.forceUpdate()
    // })

    const handleClickRemove = (index) => {
        const arr = context.basket.filter((e, i) => i !== index)
        context.basket = arr;
        setBacketArr(arr)
        context.forceUpdate()
    }

    return (
        <Containeer className="Basket-container">
            <Title>
                Basket
            </Title>
            <Cards>
                {backetArr.map((element, index) => {
                    return (
                        <Card {...element} key={index}>
                            <button onClick={() => {
                                handleClickRemove(index)
                            }}>Remove</button>
                        </Card>
                    )
                })}
            </Cards>
            <Info>
                {context.allCost() === 0 ?
                    "There are no products in the cart"
                    : `Total: $${context.allCost()}`}
            </Info>
        </Containeer>
    )
};

export default Basket;

const Cards = styled.section`
display: flex;
flex-direction: column;
`;

// const CardStyled = styled.div`
//     flex-direction: column;
//     align-items: flex-end;
//     justify-content: space-between;
//     height: 100%;

// img {
//     width: 200px;
// }

// h3 {
//     color: var(--black);
//     font-size: 3rem;
// }

// button {
//     background-color: var(--red);
// }
// `;

const Containeer = styled.div`
height: 100%;
width: 100%;`;

const Info = styled.div`
padding: 4rem;
font-size: 2rem;
font-weight: bold;
border-top: 2px solid var(--color3);
color: var(--color3);
display: flex;
align-items: center;
justify-content: flex-end;
`;
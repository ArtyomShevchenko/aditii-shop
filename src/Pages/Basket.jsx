import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import styled from "styled-components";

const Basket = (props) => {
    const context = React.useContext(Context);
    const [backetArr, setBacketArr] = React.useState(context.basket);

    // React.useEffect(() => {
    //     context.forceUpdate()
    // })

    return (
        <Containeer>
            <div className="container">
                <h2 className="wrapper">Basket</h2>
                <div className="wrapper">
                    <Cards>
                        {backetArr.map((element, index) => {
                            const data = {
                                element: element,
                                index: index,
                                f: setBacketArr,
                            }

                            console.log(element)
                            return (
                                <CardStyled>
                                    <Card {...data} key={index} />
                                </CardStyled>
                            )
                        })}
                    </Cards>
                </div>

                <Info>
                    {context.allCost() === 0 ?
                        "There are no products in the cart"
                        : `Total: $${context.allCost()}`}
                </Info>
            </div>
        </Containeer>
    )
};

export default Basket;

const Cards = styled.section`
display: flex;
flex-direction: column;
`;

const CardStyled = styled.div`
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;

img {
    width: 200px;
}

h3 {
    color: var(--black);
    font-size: 3rem;
}

button {
    background-color: var(--red);
}
`;

const Containeer = styled.div`
height: 100%;
// flex-grow: 1;
// flex
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
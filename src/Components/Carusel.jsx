import React from "react";
import Context from "../Context";
import styled from 'styled-components';

const Carusel = (props) => {
    const context = React.useContext(Context)
    const [transformX, setTransformX] = React.useState(0)

    React.useEffect(e => {
        document.querySelector(".pagination-item").classList.add("pagination-item_select");
    }, [])

    // clearInterval(interval)

    const arr = context.caruselArr

    // get width preRender
    const ref = React.useRef(null);

    const [width, setWidth] = React.useState(0)

    React.useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);

    // property
    // let numbersItems = 0;

    // const dragEvent = {
    //     start: 0,
    //     move: 0,
    //     count: 0,
    // }

    // style
    // const container = {
    //     height: "400px",
    //     backgroundColor: "#3cc3b5",
    //     display: "flex",
    //     justifyContent: "center",
    //     filter: "brightness(0.95)",
    // }

    // const itemsStyle = {
    //     transform: `translate(${transformX}px)`,
    //     transition: "all 1s",
    //     display: "flex",
    //     width: "100%",
    //     height: "100%",
    // }

    // const itemStyle = {
    //     minWidth: "100%",
    //     height: "100%",

    //     display: "grid",
    //     gridTemplateColumns: "1fr 1fr",
    //     placeItems: "center",

    //     color: "white",
    //     userSelect: "none",
    //     transition: "all 0.2s",
    // }

    // const buttonStyle = {
    //     padding: "1rem 2rem",
    //     backgroundColor: "transparent",
    //     border: "2px solid white",
    //     marginRight: "auto",
    // }

    // const paginationContainerStyle = {
    //     padding: "20px",
    //     display: "flex",
    //     gap: "10px",
    //     position: "absolute",
    //     bottom: 0,
    //     left: "50%",
    //     transform: "translateX(-50%)"
    // }


    // test
    // const handleclick = (i) => {
    //     context.basket.push(context.homePageArr[i])
    //     context.forceUpdate()
    // }

    return (
        <PaginationContainer>
            <div className="wrapper">
                <div className="carusel-items" style={{ transform: `translate(${transformX}px)` }}>
                    {arr.map((item, index) => {
                        return (
                            <div className="carusel-item" key={index} ref={ref}>
                                {/* <div className="image-container"> */}
                                    <img src={require("../i/" + item.image)} alt="Image" />
                                {/* </div> */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button>Shop now</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className="pagination-container" >
                {arr.map((element, index) => {
                    return (
                        <div key={index}>
                            <div
                                className="pagination-item"
                                onClick={(e) => {
                                    setTransformX(-width * index)

                                    const collect = document.querySelectorAll(".pagination-item")
                                    collect.forEach(item => {
                                        item.classList.remove("pagination-item_select")
                                    })
                                    collect[index].classList.add("pagination-item_select")
                                }}>
                            </div>
                        </div>
                    )
                })}
            </div>
        </PaginationContainer>
    )
};

export default Carusel;


const PaginationContainer = styled.div`
    height: 400px;
    background-color: #3cc3b5;
    display: flex;
    justify-content: center;
    filter: brightness(0.95);
    color: white;

    .wrapper {
        height: 100%;
        margin: 0;
        width: 1024px;
        position: relative;
        overflow: hidden;
    }

    h3 {
        font-size: 6rem;
        line-height: "5.4rem";
        white-space: pre-wrap;
    }

    .image-container {
        width: 100%;
        max-height: 100%;
        position: relative;
    }

    img {
        width: 100%;
        max-height: 100%;
        object-fit: containe;
    }

    .carusel-item {
        min-width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4rem;
        place-items: center;
        user-select: none;
        transition: all 0.2s;
    }

    button {
        padding: 1rem 2rem;
        background-color: transparent;
        border: 2px solid white;
        margin-right: auto;
        box-shadow: none;
    }

    .carusel-items {
        // transform: translate(100px);
        transition: all 1s;
        display: flex;
        width: 100%;
        height: 100%;
    }

    .pagination-container {
        padding: 20px;
        display: flex;
        gap: 10px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .pagination-item {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 9px;
        height: 9px;
        background-color: white;
        cursor: pointer;
        opacity: 1;
    }
    .pagination-item_select {
        opacity: 0.3;
    }
`;
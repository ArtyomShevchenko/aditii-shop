import React from "react";
import Context from "../Context";

// const arr = ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "3.1", "3.2", "3.3"]

const Carusel = (props) => {
    const context = React.useContext(Context)
    const [transformX, setTransformX] = React.useState(0)

    const arr = context.caruselArr

    // get width preRender
    const ref = React.useRef(null);
    const selectRef = React.useRef(null)

    const [width, setWidth] = React.useState(0)

    React.useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);

    // property
    let numbersItems = 0;

    // style
    const container = {
        height: "400px",
        backgroundColor: "#3cc3b5",
        display: "flex",
        justifyContent: "center",
        filter: "brightness(0.95)",
    }

    const itemsStyle = {
        transform: `translate(${transformX}px)`,
        transition: "all 1s",
        display: "flex",
        width: "100%",
        height: "100%",
    }

    const itemStyle = {
        minWidth: "100%",
        height: "100%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // fontSize: "2rem",

        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        placeItems: "center",

        color: "white",
        userSelect: "none",
        transition: "all 0.2s",
    }

    const paginationContainerStyle = {
        padding: "20px",
        display: "flex",
        gap: "10px",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)"
    }

    const paginationIconStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        width: "9px",
        height: "9px",
        backgroundColor: "white",
        cursor: "pointer",
    }

    const buttonStyle = {
        padding: "1rem 2rem",
        backgroundColor: "transparent",
        border: "2px solid white",
        marginRight: "auto",
    }

    // test
    // const handleclick = (i) => {
    //     context.basket.push(context.homePageArr[i])
    //     context.forceUpdate()
    // }

    const dragEvent = {
        start: 0,
        move: 0,
        count: 0,
    }

    return (
        <div className="carusel-container" style={container}>

            <div className="view-container wrapper" style={{ height: "100%", margin: "0", width: "1024px", position: "relative", overflow: "hidden" }}>
                <div className="carusel-items"
                    style={itemsStyle}
                    onMouseDown={(e) => dragEvent.start = e.screenX}
                    onMouseUp={(e) => {
                        dragEvent.moveTo = dragEvent.start - e.screenX

                        if (dragEvent.moveTo > 0) {
                            transformX <= -(width * (numbersItems - 1)) ? setTransformX(-(width * (numbersItems - 1))) : setTransformX(transformX - width)
                        }

                        if (dragEvent.moveTo < 0) {
                            transformX >= 0 ? setTransformX(0) : setTransformX(transformX + width)
                        }
                    }}
                >
                    {arr.map((item, index) => {
                        numbersItems += 1;
                        return (
                            <div className="carusel-item"
                                style={itemStyle}
                                key={index}
                                ref={ref}
                            >
                                <div style={{maxWidth: "100%", maxHeight: "100%", padding: "4rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <img src={require("../i/" + item.image)} alt="Image" style={{ height: "100%", width: "100%", objectFit: "containe"}}/>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                                    <h3 style={{fontSize: "6rem", lineHeight: "5.4rem", whiteSpace: "pre-wrap"}}>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button style={buttonStyle}>Shop now</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <ul className="pagination-container" style={paginationContainerStyle}>
                {arr.map((element, index) => {
                    return (
                        <li key={index}
                            style={paginationIconStyle}
                            onClick={() => {
                                setTransformX(-width * index)
                                console.log(ref.current)
                            }}
                            onMouseEnter={e => e.target.style.opacity = "0.3"}
                            onMouseLeave={e => e.target.style.opacity = "1"}
                        >
                            {index}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Carusel;
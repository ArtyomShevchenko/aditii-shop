import React from "react";
import Context from "../Context";

const arr = ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "3.1", "3.2", "3.3"]

const Carusel = (props) => {
    const context = React.useContext(Context)
    const [transformX, setTransformX] = React.useState(0)

    // get width preRender
    const ref = React.useRef(null);

    const [width, setWidth] = React.useState(0);

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
    }

    const btn = {
        width: "40px",
        height: "60px",
        backgroundColor: "red",
        position: "relative",
        zIndex: "2",
        cursor: "pointer",
        userSelect: "none"
    }

    const itemsStyle = {
        transform: `translate(${transformX}px)`,
        transition: "all 1s",
        backgroundColor: "lightgray",
        display: "flex",
        width: "100%",
        height: "100%",
        gap: "10px",
    }

    const itemStyle = {
        // backgroundColor: "gray",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "80px",
        color: "red",
        userSelect: "none",
        transition: "all 0.2s",
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

            <div className="btn btn-prew" onClick={() => {
                transformX >= 0 ? setTransformX(-width * (numbersItems - 1)) : setTransformX(transformX + width)
            }} style={btn}>
                prew
            </div>

            <div className="view-container wrapper" style={{ height: "100%", margin: "0", width: "1024px" }}>

                <div className="carusel-items"
                    style={itemsStyle}

                    onMouseEnter={(e) => {
                        return
                    }}

                    onMouseLeave={(e) => {
                        return
                    }}

                    onMouseDown={(e) => {
                        dragEvent.start = e.screenX
                        console.clear()
                        console.log(e.target)
                    }}

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
                                {item}
                            </div>
                        )
                    })}

                </div>

            </div>

            <div className="btn btn-next" onClick={() => {
                transformX <= -(width * (numbersItems - 1)) ? setTransformX(0) : setTransformX(transformX - width)
            }} style={btn}>
                next
            </div>
        </div>
    )
};

export default Carusel;
import React from "react";
import Context from "../Context";

// const arr = ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "3.1", "3.2", "3.3"]

const Swiper = (props) => {
    const context = React.useContext(Context);
    const [transformX, setTransformX] = React.useState(0)

    // get width preRender
    const ref = React.useRef(null);
    const arr = props.swiperArr

    // console.log(arr1)

    const [width, setWidth] = React.useState(0);

    React.useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);

    // property
    let numbersItems = 0;

    const transform = {
        transform: `translate(${transformX}px)`,
    }

    // console.log(width)

    // test
    // const handleclick = (i) => {
    //     context.basket.push(context.homePageArr[i])
    //     context.forceUpdate()
    // }

    return (
        <div className="swiper-container">

            <div className="btn btn-prew" onClick={() => {
                transformX >= 0 ? setTransformX(-width * (numbersItems - 3)) : setTransformX(transformX + width)
            }}>
                <svg viewBox="0 0 47.255 47.255" style={{ transform: "rotate(180deg)", height: "90px" }}>
                    <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z" />
                </svg>
            </div>

            <div className="view-container wrapper">

                <div className="items" style={transform}>

                    {arr.map((item, index) => {
                        numbersItems += 1;
                        return (
                            <div className="item" key={index} ref={ref}>
                                <img src={require("../i/" + item.image)} alt="Image" />
                                <h3>{item.title}</h3>
                                <button>Shop</button>
                            </div>
                        )
                    })}

                </div>

            </div>

            <div className="btn btn-next" onClick={() => {
                transformX <= -(width * (numbersItems - 3)) ? setTransformX(0) : setTransformX(transformX - width)
            }}>
                <svg viewBox="0 0 47.255 47.255" style={{ transform: "rotate(0deg)", height: "90px" }}>
                    <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z" />
                </svg>
            </div>
        </div>
    )
};

export default Swiper;
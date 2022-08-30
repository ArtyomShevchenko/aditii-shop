import React from "react";

const arr = ["1", "2", "3", "4"]



const Sale = (props) => {
    const [x, setX] = React.useState(0)

    const stylesItems = {
        transform: `translate(${x}px)`,
    }

    console.log(x)



    return (
        <div className="Sale-container">
            <div className="container">
                <div className="wrapper">
                    <h1>Sale</h1>
                    <div className="swiper-container">
                        <div className="btn btn-next" onClick={(e) => {
                            console.log(x)
                            x > -3072 ? setX( x - 1024) : setX(0)
                        }}>next</div>
                        <div className="btn btn-prew" onClick={(e) => {
                            console.log(x)
                            x > 0 ? setX(-3072) :setX(x + 1024) 
                        }}>prev</div>
                        <div className="items" style={stylesItems}>
                            {arr.map((element, index) => {
                                return (
                                    <div
                                        className="item"
                                        key={index}
                                    >
                                        {element}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sale;
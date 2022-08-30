import React from "react";
import Carousel from "flat-carousel";

import "./Carusel.css";

const MyCarusel = () => {
    const arr = [1, 2, 3]

    return (
        <Carousel>
            {/* {arr.map((element, index) => (
                <div key={index} className="demo-item">{element}</div>
            ))} */}
        </Carousel>
    );
}

export default MyCarusel;
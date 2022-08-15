import React from "react";
import { Routes, Route } from "react-router-dom"
import Context from "./Context";
import './App.css';
import './fonts.css';

import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Sale from "./Pages/Sale";
import Handbags from "./Pages/Handbags";
import Wallets from "./Pages/Wallets";
import Accessories from "./Pages/Accessories";
import MenuStore from "./Pages/MenuStore";
import Shoes from "./Pages/Shoes";
import Vintage from "./Pages/Vintage";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Basket from "./Pages/Basket";
import Error from "./Pages/Error";

const realTime = new Date().getHours()

function App() {
  const [style, setStyle] = React.useState(() => {
    if (realTime > 6 && realTime < 20) {
      return "light"
    } else {
      return "dark"
    }
  })

  const [price, setPrice] = React.useState(0)

  const data = {
    basket: [
      { type: "backpack", title: "branded backpack", price: "35", image: "backpack_5.png" },
      { type: "backpack", title: "branded backpack", price: "36", image: "backpack_6.png" },
    ],
  };

  React.useEffect( () => {
    data.basket.forEach(element => {
      setPrice(Number(price) + Number(element.price))
    })
  }, [data.basket.length])

  return (
    <Context.Provider value={data}>
      
      <h1 className="wrapper" style={{fontSize: "50px"}}>{price}</h1>

      {/* <button onClick={ () => style === "light" ? setStyle("dark") : setStyle("light")}>toggle theam</button> */}
      {/* <div className="App" style={{ backgroundColor: theam.style[index].background, color: theam.style[index].color }}> */}
      <div className={`App ` + style}>
        <Header />
        <Routes>
          <Route path={"/" ? "/" : "Home"} element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Handbags" element={<Handbags />} />
          <Route path="/Wallets" element={<Wallets />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/MenuStore" element={<MenuStore />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/Vintage" element={<Vintage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;

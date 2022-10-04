import React from "react";
import { Routes, Route } from "react-router-dom"
import Context from "./Context";
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
import Details from "./Pages/Details";
import Error from "./Pages/Error";

const db = require("./db.json");

function App() {
	// стан для примусового рендеру
	const [refresh, setRefresh] = React.useState(0);

	// функція яка змінює стан (boolean - не кращій варіант якщо треба в багатьох компонентах оновлювать)
	const forceUpdate = () => {
		setRefresh(prev => prev + 1)
	}

	const random = (length) => {
		const num = Math.floor(Math.random() * length)
		return num;
	}

	const generateArr = (length) => {
		const arr = []
		const arrIndex = []

		for (let i = 0; i < length; i++) {
			const num = random(db.length)
			arr.push(db[num])
			arrIndex.push(num)
		}

		return arr
	}

	const data = {
		basket: [],
		allCost: () => {
			let sum = 0;
			data.basket.forEach(e => sum += Number(e.price));
			return sum
		},
		console: () => console.log(data),
		forceUpdate: () => {
			setRefresh(prev => prev + 1)
			setDatabase(data)
		},
		homePageArr: generateArr(6),
		swiperArr: generateArr(12),
		caruselArr: generateArr(5),
	};

	const [database, setDatabase] = React.useState(data)

	return (
		<Context.Provider value={database}>
			{/* <h1 className="wrapper" style={{ fontSize: "4rem" }}>{database.allCost()}</h1>
      <button onClick={forceUpdate}>Update App</button> */}
			{/* <div className={`App ` + style}> */}
			<div className={`App `}>
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
					{db.map(item => {
						return (
							<Route path={"/Details/" + item.id}
								element={<Details props={item} />}
								key={item.id}
							/>
						)
					})}
				</Routes>
				<Footer />
			</div>
		</Context.Provider>
	);
}

export default App;
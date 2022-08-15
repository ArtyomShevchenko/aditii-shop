import React from "react";
import { Link } from "react-router-dom";
import Copyright from "../Components/Copyright"

const persons = {
    "featured sale": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
    "mens store": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
    "women store": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
    "quick links": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
}

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="wrapper">
                    {Object.keys(persons).map((person, index) => {
                        return (
                            <div key={index}>
                                <h1>{person}</h1>
                                <ul>
                                    {persons[person].map((element, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={element.link}>
                                                    {element.id}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Copyright />
        </footer>
    )
};

export default Footer;
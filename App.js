import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/img/foodvilla.png"

const Title = () => (
    <img className="logo" src={logo} alt="logo"></img>
);

const Header = () => {
    return (
        <div>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}; 

const Body = () => {
    return (
        <h4>Body</h4>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
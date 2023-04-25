import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/img/foodvilla.png"

const Title = () => (
    <a href="/">
        <img className="logo" src={logo} alt="logo"/>
    </a>
);

const Header = () => {
    return (
        <div className="header">
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

const RestrauntCard = () => {
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35"/>
            <h2>Burger King</h2>
            <h3>Burgers, American</h3>
            <h4>4.2 stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <RestrauntCard />
        </div>
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
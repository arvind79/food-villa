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

//Config Driven UI
const config = [
    {
        type: "carousel",
        cards: [
            {
                offerName: "50% off"
            },
            {
                offerName: "No Delivery Charge"
            }
        ]
    },
    {
        type: "restaurants",
        cards: [
            {
                offerName: "50% off"
            },
            {
                offerName: "No Delivery Charge"
            }
        ]
    }

]

const restaurantList = [
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
        cuisines: ["Burger", "American"],
        rating: "4.2",
    },
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
        cuisines: ["Burger", "American"],
        rating: "4.2",
    },
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
        cuisines: ["Burger", "American"],
        rating: "4.2",
    }, 
]

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={restaurantList[0].image} />
            <h2>{restaurantList[0].name}</h2>
            <h3>{restaurantList[0].cuisines.join(", ")}</h3>
            <h4>{restaurantList[0].rating} stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
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
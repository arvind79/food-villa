import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react"

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText)
  )
}

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurants, setRestaurants] = useState(restaurantList)
  // console.log(restaurants)

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange = {(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button 
          className="search-btn"
          onClick = {() => {
            // setRestaurants(restaurantList)
            const data = filterData(searchText, restaurantList)
            setRestaurants(data)
            console.log("line 34: ", restaurants)
          }}
        >Search</button>
      </div>

      <div className="restaurant-list">
      {
        restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })
      }
      </div>
    </>
  );
};

export default Body;

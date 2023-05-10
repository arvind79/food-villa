import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import {useState, useEffect} from "react"

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText)
  )
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  // console.log("body")
  // console.log("rest", allRestaurants)
  // console.log("body")

  useEffect(() => {
    //API Call 
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }


  //not render component(then early return)
  if(!allRestaurants) return null   //incase if allRestaurants not created in time

  //Conditional Rendering
  //if Restaurant is empty => shimmer UI
  //if Restaurant has data => actual data UI

  return (allRestaurants.length === 0) ? <Shimmer /> : (
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
            const data = filterData(searchText, allRestaurants)
            setFilteredRestaurants(data)
          }}
        >Search</button>
      </div>

      <div className="restaurant-list">
      {
        filteredRestaurants.map((restaurant) => {
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

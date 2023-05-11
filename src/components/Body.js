import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import {useState, useEffect} from "react"

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  //not render component(then early return)
  if(!allRestaurants) return null   

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
        (filteredRestaurants?.length === 0) ? (<h1>No Result Found</h1>) : 
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

import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
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
            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })
      }
      </div>
    </>
  );
};

export default Body;

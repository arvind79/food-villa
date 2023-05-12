import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //reading a dynamic URL params
  const params = useParams();
  const { resId } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId
    );
    const json = await data.json();
    // console.log(json);
    setRestaurant(json);
  }

  if(restaurant === null) return <Shimmer />

  // console.log(restaurant.data.cards[0].card.card.info)
  const restaurantBasePath = restaurant.data.cards[0].card.card.info

  // console.log(restaurant.data.cards[2].groupedCard.cardGroupMap.REGULAR)
  const restaurantPathForMenus = restaurant.data.cards[2].groupedCard.cardGroupMap.REGULAR
  // console.log(restaurantPathForMenus.cards[1].card.card.itemCards)
  const restaurantPathForMenusOneType = restaurantPathForMenus.cards[1].card.card.itemCards

  return (
    <div className="restaurant-menu">  
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurantBasePath.name}</h2>
        <img src={IMG_CDN_URL + restaurantBasePath.cloudinaryImageId} />
        <h3>{restaurantBasePath.areaName}</h3>
        <h3>{restaurantBasePath.city}</h3>
        <h3>{restaurantBasePath.avgRating} stars</h3>
        <h3>{restaurantBasePath.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurantPathForMenusOneType.map((item) => {
            return <li key={item.card.info.name}>{item.card.info.name}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

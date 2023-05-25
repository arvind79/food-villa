import { useParams } from "react-router-dom"
import { IMG_CDN_URL, MENU_ITEM_IMG_CDN_URL } from "../constants"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"

const RestaurantMenu = () => {
  //reading a dynamic URL params
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurant(resId)

  if(restaurant === null) return <Shimmer />

  // console.log(restaurant.data.cards[0].card.card.info)
  const restaurantBasePath = restaurant.data.cards[0].card.card.info

  // console.log(restaurant.data.cards[2].groupedCard.cardGroupMap.REGULAR)
  const restaurantPathForMenus = restaurant.data.cards[2].groupedCard.cardGroupMap.REGULAR
  // console.log(restaurantPathForMenus.cards)
  const restaurantPathForMenusOneType = restaurantPathForMenus.cards//.card.card.itemCards
  // console.log(restaurantPathForMenusOneType[1]?.card?.card?.itemCards)

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
          {restaurantPathForMenusOneType?.map((groupOfItems) => {
            return (
              groupOfItems?.card?.card?.itemCards?.map((item) => {
                let itemStart = item?.card?.info
                let itemPrice = item?.card?.info?.price / 100
                return (
                  <li key={itemStart?.name} className="restaurant-menu-items">
                    {itemStart?.name}
                    <img src={MENU_ITEM_IMG_CDN_URL + itemStart?.imageId}/>
                    <h4>{itemPrice}</h4>
                    <p>{itemStart?.description}</p>
                  </li>

                )
              })
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

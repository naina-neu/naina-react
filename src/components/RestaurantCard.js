import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  console.log(props);
  return (
    <div className="res-card">
      <img className="res-logo" src={CON_URL + cloudinaryImageId} />

      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

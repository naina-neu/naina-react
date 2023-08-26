import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData";
import { useState } from "react";

// not using keys is not acceptable
const Body = () => {
  //Local State Variable
  // whenever a state variable changes the react will re-render the variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  //Normal JS Variable

  let listOfRestaurants2 = [
    {
      data: {
        id: "334475",
        name: "Dominos",
        cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 4000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334477",
        name: "MCD",
        cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 4000,
        deliveryTime: 36,
        avgRating: "4.8",
      },
    },
    {
      data: {
        id: "334476",
        name: "KFC",
        cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 4000,
        deliveryTime: 36,
        avgRating: "4.8",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            // console.log("Button was clicked");
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 3.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

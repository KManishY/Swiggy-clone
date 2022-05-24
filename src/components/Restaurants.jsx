import React from "react";
import Restaurant from "../components/Restaurant";
const Restaurants = (props) => {
      return (
            <div>
                  <div className="container divider">
                        <div className="cards">
                              {props.restaurants.map((restaurant) => (
                                    <Restaurant
                                          key={restaurant.id}
                                          restaurant={restaurant}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Restaurants;

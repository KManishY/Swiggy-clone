import React from "react";

const Offer = (props) => {
      return (
            <section className="offers">
                  <div className="container">
                        {props.offer.map((offer, index) => (
                              <img key={index} className="offer" src={offer} />
                        ))}
                  </div>
            </section>
      );
};

export default Offer;

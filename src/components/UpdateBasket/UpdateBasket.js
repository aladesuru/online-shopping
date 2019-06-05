import React from "react";
import PropTypes from "prop-types";

import Image from "../Image";

import TotalCost from "../TotalCost";
import DeliveryCharges from "../DeliveryCharges";

const UpdateBasket = ({ basket }) => {
  // console.log(props.basket);
  return (
    <div className="updatebasket-container clearfix">
      {basket.map((item, index) => {
        return (
          <div key={index}>
            <div className="update-basket-content">
              <div className="update-basket-detail display-inline">
                <div className="update-basket-detail-image">
                  <Image url={item.image} />
                </div>
                <div className="update-basket-content-price display-inline">
                  <span>{item.name}</span>
                  <br />
                  <span>&pound; {item.price}</span>
                </div>
              </div>

              <div className="update-basket-counter display-inline">
                <span className="increment">-</span>
                <span className="point">{item.units}</span>
                <span className="decrement">+</span>
              </div>
            </div>
          </div>
        );
      })}
      <DeliveryCharges />
      <TotalCost />
    </div>
  );
};

UpdateBasket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UpdateBasket;

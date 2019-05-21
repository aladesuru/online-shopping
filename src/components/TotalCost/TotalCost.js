import React from "react";
import PropTypes from "prop-types";

const TotalCost = ({ unitPrice, units }) => {
  // console.log("unitPrice " + unitPrice, " units " + units);
  return (
    <div className="total-cost-container">
      <h2>Total Cost</h2>
      <p>&pound; 12</p>
      <button>Checkout</button>
    </div>
  );
};

TotalCost.propTypes = {
  // unitPrice: PropTypes.string.isRequired,
  // units: PropTypes.number.isRequired
};
export default TotalCost;

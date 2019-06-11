import React from "react";
import PropTypes from "prop-types";

const TotalCost = ({ basket }) => {
  const totalCost= basket.reduce((total ,value) => {
    total = total + (Number(value.price) * Number(value.units))
    return total;
  }, 0);

  return (
    <div className="total-cost-container">
      <h2>Total Cost</h2>
      <p>&pound; {totalCost}</p>
      <button>Checkout</button>
    </div>
  );
};

TotalCost.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default TotalCost;

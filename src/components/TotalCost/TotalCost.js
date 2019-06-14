import React from "react";
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return{
    basket: state.basket
  }
}
export default connect(mapStateToProps)(TotalCost);

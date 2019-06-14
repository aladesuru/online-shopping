import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { updatetUnitPriceAction } from '../../actionCreators/actions.js';

import Image from "../Image";
import DeliveryCharges from "../DeliveryCharges";

const UpdateBasket = ({ basket , updatetUnitPrice }) => {
  return (
    <div className="updatebasket-container clearfix">
      {basket.map((item , index) => {
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
                <span className="decrement" onClick={() => updatetUnitPrice(index , -1)}>-</span>
                <span className="point">{item.units}</span>
                <span className="increment" onClick={() => updatetUnitPrice(index , 1)}>+</span>
              </div>
            </div>
          </div>
        );
      })}
      <DeliveryCharges />
    </div>
  );
};

UpdateBasket.propTypes = {
  updateProductUnit: PropTypes.func
};

const mapStateToProps = (state) => {
  return{
    basket: state.basket
  }
}

const mapDisPatchToProps = (dispatch) => {
  return{
    updatetUnitPrice: (index , payLoad) => { dispatch(updatetUnitPriceAction(index , payLoad))}
  }
}
export default connect(mapStateToProps , mapDisPatchToProps)(UpdateBasket);

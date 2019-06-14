import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {addItemToBasketAction} from '../../actionCreators/actions.js';

//imported components
import Image from "../Image";
import icon from "../../assets/images/basket-icon.svg";

const ProductCard = ({ code, name, image, price, handleAddItemToBasket}) => {
  const payLoad = {
    code,
    name,
    image,
    price,
    units: 1
  };

  const handleClick = () => {
    handleAddItemToBasket(payLoad);
  }

  return (
    <div className="product-container">
      <div className="product-content">
        <div className="product-content-image display-inline">
          <Image url={image} alt="product image" />
        </div>
        <div className="product-content-image-footer">
          <div className="product-detail display-inline">
            {name} <span>{`(${code})`}</span>
            <br /> <span className="price-font-face">&pound; {price}</span>
          </div>
          <div
            className="icon display-inline"
            onClick={handleClick}
          >
            <span className="basket-icon">
              <Image url={icon} alt="icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};


const mapStateToProps = (state) => {
  return{
    basket: state.basket
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleAddItemToBasket: (payLoad) => { dispatch(addItemToBasketAction(payLoad)) }
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(ProductCard);

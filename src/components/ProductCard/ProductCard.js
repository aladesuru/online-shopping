import React from "react";
import PropTypes from "prop-types";

//imported components
import Image from "../Image";
import icon from "../../assets/images/basket-icon.svg";

const ProductCard = ({ code, name, image, price, handleAddItemToBasket }) => {
  const payLoad = {
    code,
    name,
    image,
    price,
    units: 1
  };
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
            onClick={() => handleAddItemToBasket(payLoad)}
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
export default ProductCard;

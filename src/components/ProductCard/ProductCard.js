import React from "react";
import PropTypes from "prop-types";

//imported components
import Image from "../Image";
import icon from "../../assets/images/basket-icon.svg";

const ProductCard = ({
  productName,
  productCode,
  productPrice,
  productImage,
  handleAddItemToBasket
}) => {
  return (
    <div className="product-container">
      <div className="product-content">
        <div className="product-content-image display-inline">
          <Image url={productImage} alt="product image" />
        </div>
        <div className="product-content-image-footer">
          <div className="product-detail display-inline">
            {productName} <span>{`(${productCode})`}</span>
            <br />{" "}
            <span className="price-font-face">&pound; {productPrice}</span>
          </div>
          <div
            className="icon display-inline"
            onClick={() =>
              handleAddItemToBasket({
                productName,
                productCode,
                productPrice,
                productImage,
                units: 1
              })
            }
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
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired
};
export default ProductCard;

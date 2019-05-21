import React from "react";
import PropTypes from "prop-types";

// import components

import ProductCard from "../ProductCard";

const ProductList = ({ product, handleAddItemToBasket }) => {
  return (
    <div className="container id=product-list">
      <div className="propduct-card-list-container">
        <h2>Shop</h2>
        {product.map(product => {
          return (
            <div
              className="propduct-card-list display-inline"
              key={product.code}
            >
              <ProductCard
                productName={product.name}
                productImage={product.image}
                productPrice={product.price}
                productCode={product.code}
                handleAddItemToBasket={handleAddItemToBasket}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddItemToBasket: PropTypes.func.isRequired
};

export default ProductList;

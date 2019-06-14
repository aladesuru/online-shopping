import React from "react";
import {connect} from 'react-redux';

// import components

import ProductCard from "../ProductCard";

const ProductList = ({ product}) => {
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
                name={product.name}
                image={product.image}
                price={product.price}
                code={product.code}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    product: state.data
  }
}

export default connect(mapStateToProps)(ProductList);

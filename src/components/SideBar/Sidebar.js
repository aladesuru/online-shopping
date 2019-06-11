import React from "react";
import PropTypes from "prop-types";

//import components

import UpdateBasket from "../UpdateBasket";
import TotalCost from "../TotalCost";
import Header from "../Header"; 

const SideBar = ({ toggleVisibility, basket  , updateProductUnit}) => {
  return (
    <div className="modal">
      <div className="modal-content-container">
        <div className="modal-content">
          <Header
            toggleVisibility={toggleVisibility}
            basket={basket}
          />
          <h2>My Basket</h2>
          <UpdateBasket basket={basket} updateProductUnit={updateProductUnit}/>
          <TotalCost basket={basket}/>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes ={
  toggleVisibility: PropTypes.func.isRequired,
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateProductUnit: PropTypes.func.isRequired,
}

export default SideBar;
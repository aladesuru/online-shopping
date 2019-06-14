import React from "react";
import PropTypes from "prop-types";

//import components

import UpdateBasket from "../UpdateBasket";
import TotalCost from "../TotalCost";
import Header from "../Header"; 

const SideBar = ({toggleVisibility}) => {
  return (
    <div className="modal">
      <div className="modal-content-container">
        <div className="modal-content">
          <Header
            toggleVisibility={toggleVisibility}
          />
          <h2>My Basket</h2>
          <UpdateBasket />
          <TotalCost />
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes ={
  toggleVisibility: PropTypes.func.isRequired,
}

export default SideBar;
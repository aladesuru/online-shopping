import React from "react";

//import components

import UpdateBasket from "../UpdateBasket";
// import TotalCost from "../TotalCost";
// import DeliveryCharges from "../DeliveryCharges";
import Header from "../Header";

const SideBar = ({ toggleVisibility, totalItemInBasket }) => {
  return (
    <div className="modal">
      <div className="modal-content-container">
        <div className="modal-content">
          <Header
            toggleVisibility={toggleVisibility}
            totalItemInBasket={totalItemInBasket}
          />
          <h2>My Basket</h2>
          {/* <UpdateBasket /> */}
        </div>
      </div>
    </div>
  );
};
export default SideBar;

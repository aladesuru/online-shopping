import React from "react";

//imported components
import Icon from "../Icon";
import icon from "../../assets/images/basket-icon.svg";

const Header = ({ totalItemInBasket }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          Simple fashion
          <div className="icon-wrapper">
            <span className="basket-icon">
              <Icon url={icon} alt="icon" />
            </span>
            <span className="badges">{totalItemInBasket.length}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

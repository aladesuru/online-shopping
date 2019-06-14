import React, { Component } from "react";


//imported components
import Header from "./components/Header";
import ProductList from "./components/ProductCardList";
import SideBar from "./components/SideBar";


class App extends Component {
  state = {
    basket: [
      {
        code: "p60216526",
        name: "Cotton Rich Knitted Polo",
        image:
          "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T30_2412M_F0_X_EC_90",
        price: "19.50",
        units: 1
      }
    ],
    isVisible: false
  };

  toggleVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };
  
  render() {
    return (
      <div className="app">
        <Header
          toggleVisibility={this.toggleVisibility} />
        {this.state.isVisible ? (
          <SideBar
            toggleVisibility={this.toggleVisibility} />
        ) : (
          ""
        )}
        <ProductList />
      </div>
    );
  }
}

export default App;

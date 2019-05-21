import React, { Component } from "react";

//imported components
import Header from "./components/Header";
import ProductList from "./components/ProductCardList";
// import ProductCard from "./components/ProductCard";
import UpdateBasket from "./components/UpdateBasket";
// import DeliveryCharges from "./components/DeliveryCharges";
// import TotalCost from "./components/TotalCost";
// import SideBar from "./components/SideBar";

const data = [
  {
    code: "p60216526",
    name: "Cotton Rich Knitted Polo",
    image:
      "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T30_2412M_F0_X_EC_90",
    price: "19.50"
  },
  {
    code: "p60176304",
    name: "Slim Fit Travel Chinos with Stretch",
    image:
      "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T17_6389M_Y0_X_EC_90",
    price: "45"
  },
  {
    code: "p60204884",
    name: "Pure Linen Checked Jacket",
    image:
      "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T19_7381_NU_X_EC_90",
    price: "99"
  },
  {
    code: "p60216412",
    name: "Linen Rich Tailored Fit Shirt",
    image:
      "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T11_4676X_Z0_X_EC_90",
    price: "45"
  },
  {
    code: "p60133992",
    name: "Pure Silk Spotted Tie",
    image:
      "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T12_7725P_F4_X_EC_0",
    price: "17.50"
  },
  {
    code: "p60216575",
    name: "Taxi Cufflinks",
    image:
      "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T09_5461M_Y4_X_EC_0",
    price: "15"
  }
];

class App extends Component {
  state = {
    product: data,
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
    toggleSidebar: false
  };

  toggleVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
    console.log(this.state.toggleSidebar);
  };

  handleAddItemToBasket = product => {
    // console.log(product);
    const existingPropduct = this.state.basket.filter(
      p => p.code === product.productCode
    );
    if (existingPropduct.length > 0) {
      const withoutExistingProduct = this.state.basket.filter(
        p => p.code !== product.productCode
      );
      const updateUnitsProduct = {
        ...existingPropduct[0],
        units: existingPropduct[0].units + product.units
      };

      this.setState({
        basket: [...withoutExistingProduct, updateUnitsProduct]
      });
    } else {
      this.setState({
        basket: [...this.state.basket, product]
      });
    }
    console.log(this.state.basket);
  };

  // handleToggleSidebar = () => {
  //   this.setState(prevState => {
  //     return {
  //       toggleSidebar: !prevState.toggleSidebar
  //     };
  //   });
  //   console.log(this.state.toggleSidebar);
  // };

  render() {
    const { product } = this.state;
    return (
      <div className="app">
        <Header
          onClick={this.toggleVisibility}
          totalItemInBasket={this.state.basket}
        />
        {/* {this.state.toggleSidebar ? <SideBar /> : ""} */}
        <UpdateBasket basket={this.state.basket} />
        <ProductList
          product={product}
          handleAddItemToBasket={this.handleAddItemToBasket}
        />
      </div>
    );
  }
}

export default App;

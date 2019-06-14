import React, { Component } from "react";

//imported components
import Header from "./components/Header";
import ProductList from "./components/ProductCardList";
import SideBar from "./components/SideBar";


class App extends Component {
  state = {
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

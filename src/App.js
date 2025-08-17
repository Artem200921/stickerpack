import "./App.css";
import React from "react";
import { StickerList } from "./components/StickerList.jsx";
import { AppStyles } from "./AppStyles.js";
import obj from "./data/stickerpack.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = { selectedLabel: "" };
  }

  handleStickerClick = (label) => {
    this.setState({ selectedLabel: label });
  };
  render() {
    return (
      <AppStyles>
        <StickerList list={obj} click={this.handleStickerClick} />
        <p>{this.state.selectedLabel}</p>
      </AppStyles>
    );
  }
}

export default App;

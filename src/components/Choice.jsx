import React from "react";
import { Sticker } from "./Sticker.jsx";

export class Choice extends React.Component {
  

  render() {
    return (
      <>
        <Sticker list={this.props.list} click={this.props.handler} />
        
      </>
    );
  }
}

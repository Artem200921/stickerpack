import { Item } from "./Sticker";
import React from "react";

export class Sticker extends React.Component {
  render() {
    return (
      <>
        {this.props.list.map((sticker, index) => (
          <Item key={index}>
            <img
              src={sticker.img}
              alt=""
              onClick={() => this.props.click(sticker.label)}
            />
          </Item>
        ))}
      </>
    );
  }
}

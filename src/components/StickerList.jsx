import React from "react";
import { List } from "./StickerList.js";

import { Choice } from "./Choice";

export class StickerList extends React.Component {
  
  render() {
    return (
      <List>
        <Choice list={this.props.list} handler={this.props.click} />
      </List>
    );
  }
}

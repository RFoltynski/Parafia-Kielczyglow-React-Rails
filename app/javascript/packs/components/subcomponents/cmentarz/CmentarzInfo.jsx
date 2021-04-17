import { Basic, ManyImages } from "./../../elements/contentLayouts";
import React, { Component } from "react";

import caly from "./../../img/budowa/caly.JPG";
import caly2 from "./../../img/budowa/caly2.JPG";

const section3 = {
  header: "Duszpasterstwo",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
  images: [caly, caly2],
  reverse: true,
};

class CmentarzInfo extends Component {
  render() {
    return (
      <div className="subcategory__container">
        <div className="subcategory__view">
          <h2>Cmentarz Parafialny</h2>
          <br />
          <div className="subcategory__view__column">
            <ManyImages data={section3} />
          </div>
        </div>
      </div>
    );
  }
}

export default CmentarzInfo;

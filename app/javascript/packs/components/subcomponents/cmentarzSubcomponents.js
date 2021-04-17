import React, { Component } from "react";
import MainSubcomponent from "./mainSubcomponent";
import { Basic, ManyImages } from "./../elements/contentLayouts";
import {} from "./mainSubcomponent";
import caly from "./../img/budowa/caly.JPG";
import caly2 from "./../img/budowa/caly2.JPG";

const section3 = {
  header: "Duszpasterstwo",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
  images: [caly, caly2],
  reverse: true,
};

const CmentarzInfo = (props) => {
  const subcomponentsContent = [<ManyImages data={section3} />];
  return <MainSubcomponent layouts={subcomponentsContent} />;
};

export default CmentarzInfo;

import React from "react";
import MainSubcomponent from "./mainSubcomponent";
import { Basic, ManyImages } from "./../elements/contentLayouts";
import caly from "./../img/budowa/caly.JPG";
import caly2 from "./../img/budowa/caly2.JPG";

const section3 = {
  header: "Duszpasterstwo",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
  images: [caly, caly2],
  reverse: false,
};

const section4 = {
  header: "Duszpasterstwo",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
  images: [caly],
  reverse: false,
};

export const CmentarzInfo = (props) => {
  const subcomponentsContent = [
    <ManyImages data={section4} />,
    <ManyImages data={section4} />,
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Cmentarz"} />
  );
};

export const Kaplica = (props) => {
  const subcomponentsContent = [<ManyImages data={section3} />];
  return <MainSubcomponent layouts={subcomponentsContent} header={"Kaplica"} />;
};

export const Pogrzeby = (props) => {
  const subcomponentsContent = [<ManyImages data={section4} />];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Pogrzeby"} />
  );
};

import { Basic, ManyImages } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import franciszek from "./../../img/parafia/Opatronie/franciszek.jpg";
import franciszekM from "./../../img/parafia/Opatronie/franciszek-mlody.jpg";
import franciszekP from "./../../img/parafia/Opatronie/franciszek-prosto.jpg";

export const OPatronie = () => {
  const section1 = {
    header: "Życie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [franciszek],
    reverse: false,
  };

  const section2 = {
    header: "Powołanie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [franciszek, franciszekM, franciszekP],
    reverse: false,
  };
  const section3 = {
    header: "Duszpasterstwo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [franciszek, franciszek],
    reverse: true,
  };
  const subcomponentsContent = [
    <Basic data={section1} />,
    <ManyImages data={section2} />,
    <Basic data={section3} />,
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"O patronie"} />
  );
};

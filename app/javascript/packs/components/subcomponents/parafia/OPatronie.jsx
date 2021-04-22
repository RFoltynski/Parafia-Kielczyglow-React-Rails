import { Basic } from "./../../elements/content/OneImage";
import MainSubcomponent from "./../mainSubcomponent";
import { ManyImages } from "./../../elements/content/photoContent";
import React from "react";
import { useSelector } from "react-redux";

export const OPatronie = () => {
  const data = useSelector((state) => state.oPatronie);

  const subcomponentsContent = [
    <Basic data={data.section1} key={1} />,
    <ManyImages data={data.section2} key={2} />,
    <Basic data={data.section3} key={3} />,
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"O patronie"} />
  );
};

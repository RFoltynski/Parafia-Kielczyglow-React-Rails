import { LayoutContentWithSubcontent } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Nabozenstwa = () => {
  const data = useSelector((state) => state.nabozenstwa);
  const subcomponentsContent = [
    <LayoutContentWithSubcontent data={data.section2} />,
    <LayoutContentWithSubcontent data={data.section3} />,
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Nabożeństwa"} />
  );
};

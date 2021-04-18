import { Bio } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Powolania = () => {
  const data = useSelector((state) => state.powolania);
  const subcomponentsContent = data.map((item, i) => {
    return <Bio data={item} key={i} />;
  });
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Powołania"} />
  );
};

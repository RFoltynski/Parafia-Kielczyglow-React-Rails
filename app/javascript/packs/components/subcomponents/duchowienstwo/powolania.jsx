import { Bio } from "./../../elements/content/Bio";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Powolania = () => {
  const data = useSelector((state) => state.powolania);
  const keys = Object.keys(data);

  const subcomponentsContent = keys.map((item, key) => {
    return <Bio data={data[item]} key={key} />;
  });

  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Powołania"} />
  );
};

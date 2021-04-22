import { Bio } from "./../../elements/content/Bio";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Proboszcz = () => {
  const data = useSelector((state) => state.proboszcz);
  const subcomponentsContent = [<Bio data={data} key={1} />];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Proboszcz"} />
  );
};

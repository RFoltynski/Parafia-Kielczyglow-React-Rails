import { Bio } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Proboszcz = () => {
  const data = useSelector((state) => state.proboszcz);
  console.log(data);
  const subcomponentsContent = [<Bio data={data} key={1} />];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Proboszcz"} />
  );
};

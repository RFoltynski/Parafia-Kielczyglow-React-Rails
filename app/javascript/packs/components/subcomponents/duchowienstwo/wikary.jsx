import { Bio } from "./../../elements/content/Bio";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Wikary = () => {
  const data = useSelector((state) => state.wikariusz);
  const subcomponentsContent = [<Bio data={data} key={1} />];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Obecny Wikariusz"}
    />
  );
};

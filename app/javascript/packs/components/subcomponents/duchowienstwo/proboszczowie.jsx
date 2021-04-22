import { Bio } from "./../../elements/content/Bio";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Proboszczowie = () => {
  const data = useSelector((state) => state.proboszczowie);
  const subcomponentsContent = data.map((item, i) => {
    return <Bio data={item} key={i} />;
  });
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Byli Proboszczowie"}
    />
  );
};

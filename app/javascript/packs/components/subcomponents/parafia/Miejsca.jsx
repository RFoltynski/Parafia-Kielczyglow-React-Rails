import { Basic } from "./../../elements/content/OneImage";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Miejsca = () => {
  const data = useSelector((state) => state.miejsca);

  const subcomponentsContent = [<Basic data={data.section1} key={1} />];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Miejsca w parafi"}
    />
  );
};

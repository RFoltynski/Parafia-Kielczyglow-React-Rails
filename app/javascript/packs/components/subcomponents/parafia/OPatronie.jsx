import { Basic } from "./../../elements/content/OneImage";
import MainSubcomponent from "./../mainSubcomponent";
import { ManyImages } from "./../../elements/content/photoContent";
import React from "react";
import { useSelector } from "react-redux";

export const OPatronie = () => {
  const data = useSelector((state) => state.oPatronie);

  const keys = Object.keys(data);

  const subcomponentsContent = keys.map((item, key) => {
    if (item === "section2") {
      return <ManyImages data={data[item]} key={key} />;
    } else {
      return <Basic data={data[item]} key={key} />;
    }
  });
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"O patronie"} />
  );
};

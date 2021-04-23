import { Basic } from "./../../elements/content/OneImage";
import MainSubcomponent from "./../mainSubcomponent";
import { ManyImages } from "./../../elements/content/photoContent";
import React from "react";
import { useSelector } from "react-redux";

const HistoriaParafi = () => {
  const data = useSelector((state) => state.historia);

  const keys = Object.keys(data);

  const subcomponentsContent = keys.map((item, key) => {
    if (item === "section2" || item === "section3") {
      return <ManyImages data={data[item]} key={key} />;
    } else {
      return <Basic data={data[item]} key={key} />;
    }
  });

  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Historia Parafii"}
    />
  );
};

export default HistoriaParafi;

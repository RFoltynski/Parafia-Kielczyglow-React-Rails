import { Basic } from "./../../elements/content/OneImage";
import MainSubcomponent from "./../mainSubcomponent";
import { ManyImages } from "./../../elements/content/photoContent";
import React from "react";
import { useSelector } from "react-redux";

const HistoriaParafi = () => {
  const data = useSelector((state) => state.historia);

  const subcomponentsContent = [
    <Basic data={data.section1} key={1} />,
    <ManyImages data={data.section2} key={2} />,
    <ManyImages data={data.section3} key={3} />,
    <Basic data={data.section4} key={4} />,
    <Basic data={data.section5} key={5} />,
  ];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Historia Parafii"}
    />
  );
};

export default HistoriaParafi;

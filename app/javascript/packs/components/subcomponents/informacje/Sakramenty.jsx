import MainSubcomponent from "../mainSubcomponent";
import React from "react";
import { Subcontent } from "./../../elements/content/textContent";
import { useSelector } from "react-redux";

export const Sakramenty = (props) => {
  const data = useSelector((state) => state.sakramenty);
  console.log(data);
  const subcomponentsContent = [
    <Subcontent
      header={data.chrzest.header}
      description={data.chrzest.description}
      subcontents={data.chrzest.subcontents}
      key={1}
    />,
    <Subcontent
      header={data.bierzmowanie.header}
      description={data.bierzmowanie.description}
      subcontents={data.bierzmowanie.subcontents}
      key={2}
    />,
    <Subcontent
      header={data.komunia.header}
      description={data.komunia.description}
      subcontents={data.komunia.subcontents}
      key={3}
    />,
    <Subcontent
      header={data.namaszczenieChorych.header}
      description={data.namaszczenieChorych.description}
      subcontents={data.namaszczenieChorych.subcontents}
      key={4}
    />,
    <Subcontent
      header={data.pogrzeb.header}
      description={data.pogrzeb.description}
      subcontents={data.pogrzeb.subcontents}
      key={5}
    />,
    <Subcontent
      header={data.slub.header}
      description={data.slub.description}
      subcontents={data.slub.subcontents}
      key={6}
    />,
  ];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Sakramenty"}
      key={1}
    />
  );
};

export default Sakramenty;

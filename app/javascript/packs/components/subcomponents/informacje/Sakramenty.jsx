import { LayoutContentWithSubcontent } from "./../../elements/contentLayouts";
import MainSubcomponent from "../mainSubcomponent";
import React from "react";
import { Subcontent } from "./../../elements/content/textContent";
import { useSelector } from "react-redux";

export const Sakramenty = (props) => {
  const data = useSelector((state) => state.sakramenty);
  const subcomponentsContent = [
    <Subcontent data={data.chrzest} />,
    <LayoutContentWithSubcontent data={data.bierzmowanie} />,
    <Subcontent data={data.komunia} />,
    <Subcontent data={data.namaszczenieChorych} />,
    <Subcontent data={data.pogrzeb} />,
    <Subcontent data={data.slub} />,
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Sakramenty"} />
  );
};

export default Sakramenty;

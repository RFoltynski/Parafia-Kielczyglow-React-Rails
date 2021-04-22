import {
  LayoutContentMany,
  LayoutContentWithSubcontent,
} from "./../../elements/contentLayouts";

import { LayoutSubContent } from "./../../elements/content/textContent";
import MainSubcomponent from "../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const Sakramenty = (props) => {
  const data = useSelector((state) => state.sakramenty);
  const subcomponentsContent = [
    <LayoutSubContent data={data.chrzest} />,
    <LayoutContentWithSubcontent data={data.bierzmowanie} />,
    <LayoutSubContent data={data.komunia} />,
    <LayoutSubContent data={data.namaszczenieChorych} />,
    <LayoutSubContent data={data.pogrzeb} />,
    <LayoutSubContent data={data.slub} />,
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Sakramenty"} />
  );
};

export default Sakramenty;

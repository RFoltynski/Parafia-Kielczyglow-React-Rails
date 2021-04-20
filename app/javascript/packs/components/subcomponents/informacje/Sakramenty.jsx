import React from "react";
import MainSubcomponent from "../mainSubcomponent";
import { useSelector } from "react-redux";
import {
  LayoutContentWithSubcontent,
  LayoutContentMany,
} from "./../../elements/contentLayouts";

export const Sakramenty = (props) => {
  const data = useSelector((state) => state.sakramenty);
  const subcomponentsContent = [
    <LayoutContentMany data={data.chrzest} />,
    <LayoutContentWithSubcontent data={data.bierzmowanie} />,
    <LayoutContentMany data={data.komunia} />,
    <LayoutContentMany data={data.namaszczenieChorych} />,
    <LayoutContentMany data={data.pogrzeb} />,
    <LayoutContentMany data={data.slub} />,
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Sakramenty"} />
  );
};

export default Sakramenty;

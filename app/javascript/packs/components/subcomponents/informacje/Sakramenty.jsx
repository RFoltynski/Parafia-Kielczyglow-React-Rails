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
  ];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Sakramenty"} />
  );
};

export default Sakramenty;

import {
  Basic,
  ManyImages,
  LayoutContent,
  LayoutSubContent,
  LayoutContentWithSubcontent,
} from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const ParafiaObecnie = () => {
  const data = useSelector((state) => state.obecnie);
  const subcomponentsContent = [
    <LayoutContent
      header={data.section1.header}
      description={data.section1.description}
      class={"bio"}
    />,
    <LayoutContentWithSubcontent data={data.section2} />,
    <LayoutContentWithSubcontent data={data.section3} />,
  ];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Parafia Obecnie"}
    />
  );
};

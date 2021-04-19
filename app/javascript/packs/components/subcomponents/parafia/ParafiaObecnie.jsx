import {
  Basic,
  ManyImages,
  LayoutContent,
} from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { useSelector } from "react-redux";

export const ParafiaObecnie = () => {
  const data = useSelector((state) => state.obecnie);
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Parafia Obecnie"}
    />
  );
};

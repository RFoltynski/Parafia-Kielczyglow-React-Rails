import { LayoutContent } from "./../../elements/contentLayouts";
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
    <LayoutContent
      header={data.section2.header}
      description={data.section2.description}
      class={"bio"}
    />,
    <LayoutContent
      header={data.section3.header}
      description={data.section3.description}
      class={"bio"}
    />,
  ];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Parafia Obecnie"}
    />
  );
};

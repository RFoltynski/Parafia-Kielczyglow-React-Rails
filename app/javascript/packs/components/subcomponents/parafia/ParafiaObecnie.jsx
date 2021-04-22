import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { Subcontent } from "./../../elements/content/textContent";
import { useSelector } from "react-redux";

export const ParafiaObecnie = () => {
  const data = useSelector((state) => state.obecnie);
  const subcomponentsContent = [
    <Subcontent
      header={data.section1.header}
      description={data.section1.description}
      class={"bio"}
    />,
    <Subcontent
      header={data.section2.header}
      description={data.section2.description}
      class={"bio"}
    />,
    <Subcontent
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

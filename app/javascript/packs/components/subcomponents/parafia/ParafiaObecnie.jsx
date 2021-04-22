import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { Subcontent } from "./../../elements/content/textContent";
import { useSelector } from "react-redux";

export const ParafiaObecnie = () => {
  const data = useSelector((state) => state.obecnie);
  const subcomponentsContent = [
    <Subcontent
      header={data.obecnie.header}
      description={data.obecnie.description}
      subcontents={data.obecnie.subcontents}
    />,
  ];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Parafia Obecnie"}
    />
  );
};

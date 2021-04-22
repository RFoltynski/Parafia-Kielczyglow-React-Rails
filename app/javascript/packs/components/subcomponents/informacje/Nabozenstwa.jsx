import MainSubcomponent from "./../mainSubcomponent";
import React from "react";
import { Subcontent } from "./../../elements/content/textContent";
import { useSelector } from "react-redux";

export const Nabozenstwa = () => {
  const data = useSelector((state) => state.nabozenstwa);
  const subcomponentsContent = [
    <Subcontent
      header={data.msze.header}
      description={data.msze.description}
      subcontents={data.msze.subcontents}
      key={1}
    />,
    <Subcontent
      header={data.odpust.header}
      description={data.odpust.description}
      subcontents={data.odpust.subcontents}
      key={2}
    />,
  ];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Nabożeństwa"}
      key={1}
    />
  );
};

import React from "react";
import MainSubcomponent from "../mainSubcomponent";

export const MiejscaWSieci = (props) => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Miejsca w sieci"}
    />
  );
};

export default MiejscaWSieci;

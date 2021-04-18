import React from "react";
import MainSubcomponent from "../mainSubcomponent";

export const Cmentarz = (props) => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Cmentarz"} />
  );
};

export default Cmentarz;

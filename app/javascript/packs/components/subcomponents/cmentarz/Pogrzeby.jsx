import React from "react";
import MainSubcomponent from "../mainSubcomponent";

export const Pogrzeby = (props) => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Pogrzeby"} />
  );
};

export default Pogrzeby;

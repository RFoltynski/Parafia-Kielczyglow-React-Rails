import React from "react";
import MainSubcomponent from "../mainSubcomponent";

export const WspolnotyParafialne = (props) => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Wspólnoty Parafialne"}
    />
  );
};

export default WspolnotyParafialne;

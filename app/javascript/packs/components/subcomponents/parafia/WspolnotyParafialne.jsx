import MainSubcomponent from "../mainSubcomponent";
import React from "react";

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

import MainSubcomponent from "../mainSubcomponent";
import React from "react";
import { Subcontent } from "./../../elements/content/textContent";
import { useSelector } from "react-redux";

export const Sakramenty = (props) => {
  const data = useSelector((state) => state.sakramenty);
  const keys = Object.keys(data);

  const subcomponentsContent = keys.map((item, key) => {
    return (
      <Subcontent
        header={data[item].header}
        description={data[item].description}
        subcontents={data[item].subcontents}
        key={key}
      />
    );
  });

  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Sakramenty"}
      key={1}
    />
  );
};

export default Sakramenty;

import MainSubcomponent from "../mainSubcomponent";
import React from "react";
import { Subcontent } from "./../../elements/content/textContent";
import { useSelector } from "react-redux";
export const Informacje = (props) => {
  const data = useSelector((state) => state.informacjeKontaktowe);
  const subcomponentsContent = [
    <Subcontent
      header={data.header}
      description={data.description}
      subcontents={data.dane.subcontents}
      key={1}
    />,
  ];

  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Dane Kontaktowe"}
    />
  );
};

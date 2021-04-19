import React from "react";
import MainSubcomponent from "../mainSubcomponent";
import { useSelector } from "react-redux";
import { LayoutContent } from "../../elements/contentLayouts";
export const Informacje = (props) => {
  const data = useSelector((state) => state.informacjeKontaktowe);
  const subcomponentsContent = data.map((item, i) => {
    return (
      <LayoutContent
        header={item.header}
        description={item.description}
        class={""}
        key={i}
      />
    );
  });
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Dane Kontaktowe"}
    />
  );
};

import { Basic } from "./../elements/content/OneImage";
import { ManyImages } from "./../elements/content/photoContent";
import React from "react";
import { Subcontent } from "../elements/content/textContent";
import { useSelector } from "react-redux";

const MainSubcomponent = (props) => {
  const data = useSelector((state) => state[props.reducerProperty]);
  const keys = Object.keys(data);
  console.log(data);

  const subcomponentsContent = keys.map((item, key) => {
    if (data[item].component === "ManyImages") {
      return <ManyImages data={data[item]} key={key} />;
    } else if (data[item].component === "Bio") {
      return <Basic data={data[item]} key={key} />;
    } else if (data[item].component === "Subcomponent") {
      return <Subcontent data={data[item]} key={key} />;
    }
  });

  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>{props.header}</h2>
        <div className="subcategory__view__column">
          {subcomponentsContent.map((item) => {
            return item;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSubcomponent;

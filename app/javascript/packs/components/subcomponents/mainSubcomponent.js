import { Basic } from "./../elements/content/OneImage";
import { Bio } from "./../elements/content/Bio";
import ContactForm from "./../elements/form";
import Intentions from "../elements/intentions";
import { ManyImages } from "./../elements/content/photoContent";
import NewsComponent from "../elements/newsComponent";
import React from "react";
import { Subcontent } from "../elements/content/textContent";
import { useSelector } from "react-redux";

const MainSubcomponent = (props) => {
  const data = useSelector((state) => state[props.main][props.reducerProperty]);
  const keys = Object.keys(data);
  console.log(keys);

  const subcomponentsContent = keys.map((item, key) => {
    if (data[item].component === "ManyImages") {
      return <ManyImages data={data[item]} key={key} />;
    } else if (data[item].component === "Basic") {
      return <Basic data={data[item]} key={key} />;
    } else if (data[item].component === "Bio") {
      return <Bio data={data[item]} key={key} />;
    } else if (data[item].component === "Subcomponent") {
      return (
        <Subcontent
          header={data[item].header}
          description={data[item].description}
          subcontents={data[item].subcontents}
          key={key}
        />
      );
    } else if (data[item].component === "ContactForm") {
      return <ContactForm />;
    } else if (data[item].component === "Intentions") {
      return <Intentions />;
    } else if (data[item].component === "NewsComponent") {
      return <NewsComponent />;
    }
  });

  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>{props.header}</h2>
        <div className="subcategory__view__column">{subcomponentsContent}</div>
      </div>
    </div>
  );
};

export default MainSubcomponent;

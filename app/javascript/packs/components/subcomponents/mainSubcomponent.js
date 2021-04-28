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
  const keys = Object.keys(data.content);
  console.log(keys);

  const subcomponentsContent = keys.map((item, key) => {
    console.log(data.content[item]);
    if (data.content[item].component === "ManyImages") {
      return <ManyImages data={data.content[item]} key={key} />;
    } else if (data.content[item].component === "Basic") {
      return <Basic data={data.content[item]} key={key} />;
    } else if (data.content[item].component === "Bio") {
      return <Bio data={data.content[item]} key={key} />;
    } else if (data.content[item].component === "Subcomponent") {
      console.log();
      return (
        <Subcontent
          header={data.content[item].header}
          description={data.content[item].description}
          subcontents={data.content[item].subcontents}
          key={key}
        />
      );
    } else if (data.content[item].component === "ContactForm") {
      return <ContactForm />;
    } else if (data.content[item].component === "Intentions") {
      return <Intentions />;
    } else if (data.content[item].component === "NewsComponent") {
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

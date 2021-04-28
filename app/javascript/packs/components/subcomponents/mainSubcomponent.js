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

  const subcomponentsContent = keys.map((item, key) => {
    let component = data.content[item].component;
    let content = data.content[item];

    let subComponents = {
      ManyImages: <ManyImages data={content} key={key} />,
      Basic: <Basic data={content} key={key} />,
      Bio: <Bio data={content} key={key} />,
      Subcontent: <Subcontent data={content} key={key} />,
      ContactForm: <ContactForm />,
      Intentions: <Intentions />,
      NewsComponent: <NewsComponent />,
    };

    return subComponents[component];
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

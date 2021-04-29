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
  const data = useSelector(
    (state) => state[props.main][props.reducerProperty].content
  );
  const keys = Object.keys(data);
  const subcomponentsContent = keys.map((item, key) => {
    let content = data[item];
    let component = content.component;
    return getSubcomponents(content, key, component);
  });

  return (
    <>
      <h2>{props.header}</h2>
      <div className="subcategory__view__column">{subcomponentsContent}</div>
    </>
  );
};

const getSubcomponents = (content, key, component) => {
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
};

export default MainSubcomponent;

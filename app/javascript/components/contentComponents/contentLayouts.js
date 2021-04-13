import React, { useEffect, useState } from "react";

export const Basic = (props) => {
  const { header, description, image, reverse } = props.data;
  const [name, changeName] = useState("");
  useEffect(() => {
    if (reverse) changeName(name + " reverse");
  }, []);
  return (
    <section className={"section basic" + name}>
      <img src={image} alt="sw.franciszek" className="section_image basic" />
      <div className="section_text basic">
        <h4 className="section_text_header basic">{header}</h4>
        <p className="section_text_content basic">{description}</p>
      </div>
    </section>
  );
};

export const ManyImages = (props) => {
  const { header, description, images, reverse } = props.data;
  const [name, changeName] = useState("");
  useEffect(() => {
    if (reverse) changeName(name + " reverse");
  }, []);

  return (
    <section className={"section manyimages" + name}>
      <div className="section_text manyimages">
        <h4 className="section_text_header manyimages">{header}</h4>
        <p className="section_text_content manyimages">{description}</p>
      </div>
      <div className={"section_images"}>
        {images.map((image, key) => {
          return (
            <img
              src={image}
              key={key}
              alt={"sw.franciszek" + key}
              className={"section_image manyimages"}
            />
          );
        })}
      </div>
    </section>
  );
};

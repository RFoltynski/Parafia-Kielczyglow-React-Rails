import { Gallery, Item } from "react-photoswipe-gallery";
import React, { useEffect, useState } from "react";

export const ManyImages = (props) => {
  const { header, description, images, reverse } = props.data;
  const [name, changeName] = useState("");

  useEffect(() => {
    if (reverse) changeName(name + " reverse");
  }, []);

  return (
    <section className={"section manyimages" + name}>
      <PhotoDescription
        header={header}
        description={description}
        class={"manyimages"}
      />
      <Photo images={images} class={"manyimages"} />
    </section>
  );
};

export const PhotoDescription = (props) => {
  return (
    <div className={"section_text " + props.class}>
      <h4 className={"section_text_header " + props.class}>{props.header}</h4>
      <p className={"section_text_content " + props.class}>
        {props.description}
      </p>
    </div>
  );
};

export const Photo = (props) => {
  const { images, name } = props;
  return (
    <div className={"section_image" + name}>
      <Gallery>
        {images.map((image) => [
          <Item original={image} thumbnail={image} width="1366" height="868">
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={image}
                className={"section_image" + name}
              />
            )}
          </Item>,
        ])}
      </Gallery>
    </div>
  );
};

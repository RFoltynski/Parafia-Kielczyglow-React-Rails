import { Gallery, Item } from "react-photoswipe-gallery";
import React, { useEffect, useState } from "react";

export const LayoutImages = (props) => {
  return (
    <div className={"section_images " + props.class}>
      <Gallery>
        {props.images.map((image, key) => {
          return (
            <Item
              original={image}
              thumbnail={image}
              width="1366"
              height="868"
              key={key}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image}
                  className={"section_image " + props.class}
                />
              )}
            </Item>
          );
        })}
      </Gallery>
    </div>
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
      <LayoutContent
        header={header}
        description={description}
        class={"manyimages"}
      />
      <LayoutImages images={images} class={"manyimages"} />
    </section>
  );
};

export const LayoutContent = (props) => {
  return (
    <div className={"section_text " + props.class}>
      <h4 className={"section_text_header " + props.class}>{props.header}</h4>
      <p className={"section_text_content " + props.class}>
        {props.description}
      </p>
    </div>
  );
};

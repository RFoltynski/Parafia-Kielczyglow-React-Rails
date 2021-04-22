import { Gallery, Item } from "react-photoswipe-gallery";

import React from "react";

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

export const Photo = ({ images }) => {
  return (
    <div className={"section_image"}>
      <Gallery>
        <Item original={images} thumbnail={images} width="1366" height="868">
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={images}
              className={"section_image bio"}
            />
          )}
        </Item>
      </Gallery>
    </div>
  );
};

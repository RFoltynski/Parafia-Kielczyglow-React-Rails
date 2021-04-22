import { Gallery, Item } from "react-photoswipe-gallery";

import React from "react";
import { Subcontent } from "./textContent";

export const Bio = (props) => {
  const { header, description, subcontents, image, reverse } = props.data;
  return (
    <section className={"section " + "bio"}>
      <Gallery>
        <Item original={image} thumbnail={image} width="1366" height="868">
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={image}
              className={"section_image bio"}
            />
          )}
        </Item>
      </Gallery>
      <div>
        <Subcontent
          header={header}
          description={description}
          subcontents={subcontents}
        />
      </div>
    </section>
  );
};

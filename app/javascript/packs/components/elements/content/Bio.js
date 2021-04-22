import { Gallery, Item } from "react-photoswipe-gallery";
import { Header, Subcontent } from "./textContent";

import React from "react";

export const Bio = (props) => {
  const { header, description, subcontent, image, reverse } = props.data;
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
        <Header header={header} description={description} class={"bio"} />
        {subcontent.map((subcontent) => {
          return <Subcontent data={subcontent} />;
        })}
      </div>
    </section>
  );
};

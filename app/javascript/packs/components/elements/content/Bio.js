import { Gallery, Item } from "react-photoswipe-gallery";

import { Photo } from "./photoContent";
import React from "react";
import { Subcontent } from "./textContent";

export const Bio = (props) => {
  const { header, description, subcontents, image, reverse } = props.data;
  return (
    <section className={"section " + "bio"}>
      <Photo image={image} />
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

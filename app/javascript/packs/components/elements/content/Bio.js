import { Photo } from "./photoContent";
import React from "react";
import { Subcontent } from "./textContent";

export const Bio = (props) => {
  const { header, description, subcontents, images, reverse } = props.data;
  return (
    <section className={"section " + "bio"}>
      <Photo images={images} />
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

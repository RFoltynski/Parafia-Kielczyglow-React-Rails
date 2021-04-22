import {} from "./photoContent";

import { Gallery, Item } from "react-photoswipe-gallery";
import React, { useEffect, useState } from "react";

export const Basic = (props) => {
  const { header, description, images, reverse } = props.data;
  const [name, changeName] = useState("");
  useEffect(() => {
    if (reverse) changeName(name + " reverse");
  }, []);
  return (
    <section className={"section basic" + name}>
      <LayoutImages images={images} class={"basic"} />
      <LayoutContent
        header={header}
        description={description}
        class={"basic"}
      />
    </section>
  );
};

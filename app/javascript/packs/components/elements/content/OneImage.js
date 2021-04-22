import { Photo, PhotoDescription } from "./photoContent";
import React, { useEffect, useState } from "react";

export const Basic = (props) => {
  const { header, description, images, reverse } = props.data;
  const [name, changeName] = useState("");
  useEffect(() => {
    if (reverse) changeName(name + " reverse");
  }, []);
  return (
    <section className={"section basic" + name}>
      <Photo images={images[0]} class={"basic"} />
      <PhotoDescription
        header={header}
        description={description}
        class={"basic"}
      />
    </section>
  );
};

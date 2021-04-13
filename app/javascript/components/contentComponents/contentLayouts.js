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

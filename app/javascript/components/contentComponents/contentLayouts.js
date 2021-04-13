import React from "react";

export const BasicLayout = (props) => {
  const { header, description, image } = props.data;
  return (
    <section className="section">
      <img src={image} alt="sw.franciszek" className="section_image basic" />
      <div className="section_text basic">
        <h4 className="section_text_header basic">{header}</h4>
        <p className="section_text_content basic">{description}</p>
      </div>
    </section>
  );
};

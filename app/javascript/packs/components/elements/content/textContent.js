import React from "react";

export const LayoutSubContent = (props) => {
  const { header, description, paragraphs, elementClass } = props.data;
  return (
    <div className={"section_text " + props.class}>
      <h5 className={"section_text_header " + props.class}>{header}</h5>
      <p className={"section_text_content " + props.class}>{description}</p>
      {paragraphs !== undefined ? (
        paragraphs.map((item, key) => {
          return (
            <p className={"section_text_content " + elementClass} key={key}>
              {item}
            </p>
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
};

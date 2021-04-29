import React from "react";

export const Subcontent = (props) => {
  const { header, description, subcontents } = props.data;
  return (
    <div>
      <div className={"section_text"}>
        <h4 className={"section_text_header"}>{header}</h4>
        <p className={"section_text_content"}>{description}</p>
      </div>
      {subcontents.map((element, key) => {
        return (
          <div className={"section_text"} key={key}>
            <h5 className={"section_text_header subcontent"}>
              {element.header}
            </h5>
            <p className={"section_text_content subcontent"}>
              {element.description}
            </p>

            {element.paragraphs !== undefined ? (
              element.paragraphs.map((item, key) => {
                return (
                  <ul className={"section_text_content paragraphs"} key={key}>
                    <li>{item}</li>
                  </ul>
                );
              })
            ) : (
              <div />
            )}
          </div>
        );
      })}
    </div>
  );
};

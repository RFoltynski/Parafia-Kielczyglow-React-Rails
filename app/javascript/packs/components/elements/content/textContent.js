import React from "react";

export const Subcontent = (props) => {
  const { header, description, subcontents } = props;
  return (
    <div>
      <div className={"section_text " + props.class}>
        <h4 className={"section_text_header " + props.class}>{header}</h4>
        <p className={"section_text_content " + props.class}>{description}</p>
      </div>
      {subcontents.map((element, key) => {
        return (
          <div className={"section_text " + props.class} key={key}>
            <h5 className={"section_text_header " + props.class}>
              {element.header}
            </h5>
            <p className={"section_text_content " + props.class}>
              {element.description}
            </p>

            {element.paragraphs !== undefined ? (
              element.paragraphs.map((item, key) => {
                return (
                  <p className={"section_text_content "} key={key}>
                    {item}
                  </p>
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

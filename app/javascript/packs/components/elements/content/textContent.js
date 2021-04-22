import React from "react";

export const Header = (props) => {
  return (
    <div className={"section_text " + props.class}>
      <h4 className={"section_text_header " + props.class}>{props.header}</h4>
      <p className={"section_text_content " + props.class}>
        {props.description}
      </p>
    </div>
  );
};

export const Subcontent = (props) => {
  return (
    <div>
      {props.data.map((element, key) => {
        return (
          <div className={"section_text " + props.class} key={key}>
            <h5 className={"section_text_header " + props.class}>
              {element.header}
            </h5>
            <p className={"section_text_content " + props.class}>
              {element.description}
            </p>
            {element.paragraphs !== undefined ? (
              paragraphs.map((item, key) => {
                return (
                  <p
                    className={"section_text_content " + elementClass}
                    key={key}
                  >
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

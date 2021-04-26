import React, { useEffect, useState } from "react";

const Submenu = (props) => {
  const [state, setState] = useState(props.componentsList[0][0]);

  const _renderSubComp = () => {
    return props.componentsList.map((element) => {
      if (state == element[0]) {
        return element[1];
      }
    });
  };

  const onClick = (event) => {
    let compName = event.target.name;
    setState(compName);
  };

  return (
    <div className="submenu">
      {props.componentsList.map((element, key) => {
        return (
          <button
            key={key}
            name={element[0]}
            onClick={onClick}
            className={
              state == element[0]
                ? "button_default button_clicked"
                : "button_default"
            }
          >
            {element[0]}
          </button>
        );
      })}
      {_renderSubComp()}
    </div>
  );
};
export default Submenu;

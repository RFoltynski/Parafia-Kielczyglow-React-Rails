import React, { useEffect, useState } from "react";

import MainSubcomponent from "./mainSubcomponent";
import { useSelector } from "react-redux";

const Submenu = (props) => {
  const [subcomponent, setSubcomponent] = useState(props.componentsList);
  const data = useSelector((state) => state[props.componentsList]);
  const keys = Object.keys(data);

  const componentsList = keys.map((item, key) => {
    return [
      data[item].mainHeader,
      <MainSubcomponent
        main={props.componentsList}
        reducerProperty={item}
        header={data[item].mainHeader}
        key={key}
      />,
    ];
  });

  useEffect(() => {
    setSubcomponent(componentsList[0][0]);
  }, []);

  const _renderSubComp = () => {
    return componentsList.map((element) => {
      if (subcomponent == element[0]) {
        return element[1];
      }
    });
  };

  const onClick = (event) => {
    let compName = event.target.name;
    setSubcomponent(compName);
  };

  return (
    <div className="submenu">
      {componentsList.map((element, key) => {
        return (
          <button
            key={key}
            name={element[0]}
            onClick={onClick}
            className={
              subcomponent == element[0]
                ? "button_default button_clicked"
                : "button_default"
            }
          >
            {element[0]}
          </button>
        );
      })}
      <div className="subcategory__container">
        <div className="subcategory__view">{_renderSubComp()}</div>
      </div>
    </div>
  );
};
export default Submenu;

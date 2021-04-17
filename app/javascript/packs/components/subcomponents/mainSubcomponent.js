import React, { Component } from "react";

const MainSubcomponent = (props) => {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>{props.header}</h2>
        <br />
        <div className="subcategory__view__column">
          {props.layouts.map((item, key) => {
            return item;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSubcomponent;

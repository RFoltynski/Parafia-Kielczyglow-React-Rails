import React from "react";
import ReactDOM from "react-dom";
import Router from "../components/Router";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router />,
    document.body.appendChild(document.createElement("div"))
  );
});

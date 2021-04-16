import Navbar from "./Navbar";
import React from "react";
import ReactDOM from "react-dom";

const ShowPost = () => {
  return (
    <>
      <Navbar />
      <div className="ShowPost" />
    </>
  );
};

ReactDOM.render(
  <ShowPost />,
  document.body.appendChild(document.createElement("div"))
);

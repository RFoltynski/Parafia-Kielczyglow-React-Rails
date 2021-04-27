import React, { useState } from "react";

import { ManyImages } from "./../elements/content/photoContent";
import pdf from "./../img/pdf.png";
import renderHTML from "react-render-html";

const NewsView = (props) => {
  let link = `/posts/${props.post.id}`;
  const [show, changeShow] = useState(false);

  const section2 = {
    header: "",
    description: "",
    images: props.post.images || [],
    reverse: true,
  };

  const handleClick = () => {
    changeShow(!show);
  };

  return (
    <div key={props.post.id}>
      {" "}
      <h2>
        {" "}
        {props.post.title} <a href={link} target={"_blank"} />
      </h2>
      {show ? (
        <div className="newsView-box-text-show">
          {renderHTML(props.post.description)}
          <ManyImages data={section2} key={props.post.id} />
          {props.post.file ? (
            <a href={props.post.file} className="newsView-box-a" target="blank">
              <img className="newsView-box-pdf" src={pdf} />
            </a>
          ) : (
            <div />
          )}
        </div>
      ) : (
        ""
      )}
      <center>
        <button className={"newsView-box-button"} onClick={handleClick}>
          {show ? (
            <div className={"arrowOverlayDown"}>
              <div className={"button_arrow"} />
            </div>
          ) : (
            <div className={"arrowOverlayUp"}>
              <div className={"button_arrow"} />
            </div>
          )}
        </button>
      </center>
      <div className={"newsView-box-date"}>{props.post.post_date}</div>
    </div>
  );
};

export default NewsView;

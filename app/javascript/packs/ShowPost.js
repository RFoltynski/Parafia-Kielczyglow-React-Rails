import React from "react";
import ReactDOM from "react-dom";
import ReactBnbGallery from "react-bnb-gallery";
import renderHTML from "react-render-html";
import pdf from "./../components/img/pdf.png";
import { Spring, Transition, animated } from "react-spring/renderprops.cjs";
import axios from "axios";

export default class ShowPost extends React.Component {
  state = {
    showPost: false,
    galleryOpened: false,
    numberOfPhoto: 0
  };

  componentWillMount() {
    const currentHref = window.location.href.split("/");
    const id = currentHref[currentHref.length - 1];
    console.log(id);
    axios
      .get(
        `http://localhost:3000/api/v1/posts/${id}`,
        {},
        { "Content-Type": "application/json" }
      )
      .then(res => {
        this.setState({
          post: res.data.data,
          isLoading: true
        });
      });
  }

  toggleGallery = numberOfPhoto => {
    this.setState({
      galleryOpened: !this.state.galleryOpened,
      numberOfPhoto: numberOfPhoto
    });
  };

  render() {
    const { isLoading, post } = this.state;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 0.9 }}>
        {props => (
          <div className="newsView-box" style={props}>
            <h2>{isLoading ? post.title : ""}</h2>
            <div className="newsView-box-text-show">
              {renderHTML(isLoading ? post.description : "")}
              <ReactBnbGallery
                show={this.state.galleryOpened}
                photos={isLoading ? post.pictures : []}
                onClose={this.toggleGallery}
                activePhotoIndex={this.state.numberOfPhoto}
              />
              <div className="newsView-box-img col-md-12 text-center">
                {((isLoading ? post.pictures : []) || []).map(
                  (downloadURL, i) => {
                    return (
                      <img
                        className="newsView-img"
                        onClick={() => this.toggleGallery(i)}
                        src={downloadURL.photo}
                        key={i}
                      />
                    );
                  }
                )}
              </div>
              {(isLoading ? (
                post.file
              ) : (
                ""
              )) ? (
                <a href={post.file} class="newsView-box-a" target="blank">
                  <img className="newsView-box-pdf" src={pdf} />
                </a>
              ) : (
                <div />
              )}
            </div>
            <div className={"newsView-box-date"}>
              {isLoading ? post.post_date : ""}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

ReactDOM.render(
  <ShowPost />,
  document.body.appendChild(document.createElement("div"))
);

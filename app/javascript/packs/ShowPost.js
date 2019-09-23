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
    axios
      .get(
        `http://localhost:3000/api/v1/posts/60`,
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
            <Transition
              native
              items={this.state.showPost}
              from={{ opacity: 0, maxHeight: 0 }}
              enter={{ opacity: 1, maxHeight: 12310 }}
              leave={{ opacity: 0, maxHeight: 0 }}
            >
              {show =>
                show &&
                (props => (
                  <animated.div style={props}>
                    <div className="newsView-box-text-show">
                      {renderHTML(isLoading ? post.description : "")}
                      <ReactBnbGallery
                        show={this.state.galleryOpened}
                        photos={post.pictures}
                        onClose={this.toggleGallery}
                        activePhotoIndex={this.state.numberOfPhoto}
                      />
                      <div className="newsView-box-img col-md-12 text-center">
                        {(post.pictures || []).map((downloadURL, i) => {
                          return (
                            <img
                              className="newsView-img"
                              onClick={() => this.toggleGallery(i)}
                              src={downloadURL.photo}
                              key={i}
                            />
                          );
                        })}
                      </div>
                      {post.file ? (
                        <a
                          href={post.file}
                          class="newsView-box-a"
                          target="blank"
                        >
                          <img className="newsView-box-pdf" src={pdf} />
                        </a>
                      ) : (
                        <div />
                      )}
                    </div>
                  </animated.div>
                ))
              }
            </Transition>
            <button
              className={"newsView-box-button"}
              onClick={() =>
                this.setState({
                  showPost: !this.state.showPost
                })
              }
            >
              {!this.state.showPost ? (
                <div className={"arrowOverlayDown"}>
                  <div className={"arrow"} />
                </div>
              ) : (
                <div className={"arrowOverlayUp"}>
                  <div className={"arrow"} />
                </div>
              )}
            </button>
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

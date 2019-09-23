import React from "react";
import ReactBnbGallery from "react-bnb-gallery";
import renderHTML from "react-render-html";
import pdf from "./img/pdf.png";
import { Spring, Transition, animated } from "react-spring/renderprops.cjs";

export default class NewsView extends React.Component {
  state = {
    showPost: false,
    galleryOpened: false,
    numberOfPhoto: 0
  };

  toggleGallery = numberOfPhoto => {
    this.setState({
      galleryOpened: !this.state.galleryOpened,
      numberOfPhoto: numberOfPhoto
    });
  };

  render() {
    let link = `http://localhost:3000/posts/${this.props.post.id}`;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 0.9 }}>
        {props => (
          <div className="newsView-box" style={props}>
            {" "}
            <h2>
              {" "}
              <a href={link} target={"_blank"} style={{ color: "black" }}>
                {this.props.post.title}{" "}
              </a>
            </h2>
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
                      {renderHTML(this.props.post.description)}
                      <ReactBnbGallery
                        show={this.state.galleryOpened}
                        photos={this.props.post.pictures}
                        onClose={this.toggleGallery}
                        activePhotoIndex={this.state.numberOfPhoto}
                      />
                      <div className="newsView-box-img col-md-12 text-center">
                        {(this.props.post.pictures || []).map(
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
                      {this.props.post.file ? (
                        <a
                          href={this.props.post.file}
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
              {this.props.post.post_date}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

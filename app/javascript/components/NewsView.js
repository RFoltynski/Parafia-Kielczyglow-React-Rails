import React from "react";
import ReactBnbGallery from "react-bnb-gallery";
import renderHTML from "react-render-html";
import pdf from "./img/pdf.png";

export default class NewsView extends React.Component {
  state = {
    showPost: false,
    galleryOpened: false,
    numberOfPhoto: 0,
  };

  toggleGallery = (numberOfPhoto) => {
    this.setState({
      galleryOpened: !this.state.galleryOpened,
      numberOfPhoto: numberOfPhoto,
    });
  };

  render() {
    let link = `/posts/${this.props.post.id}`;
    return (
      <div className="subcategory__view" key={this.props.post.id}>
        {" "}
        <h2>
          {" "}
          {this.props.post.title}{" "}
          <a
            className={"subcategory__view__h2"}
            href={link}
            target={"_blank"}
          />
        </h2>
        <div className="newsView-box-text-show">
          {this.state.showPost ? renderHTML(this.props.post.description) : ""}
          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={this.props.post.pictures}
            onClose={this.toggleGallery}
            activePhotoIndex={this.state.numberOfPhoto}
          />
          <div className="newsView-box-img col-md-12 text-center">
            {(this.props.post.pictures || []).map((downloadURL, i) => {
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
          {this.props.post.file ? (
            <a
              href={this.props.post.file}
              className="newsView-box-a"
              target="blank"
            >
              <img className="newsView-box-pdf" src={pdf} />
            </a>
          ) : (
            <div />
          )}
        </div>
        <center>
          <button
            className={"newsView-box-button"}
            onClick={() =>
              this.setState({
                showPost: !this.state.showPost,
              })
            }
          >
            {!this.state.showPost ? (
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
        <div className={"newsView-box-date"}>{this.props.post.post_date}</div>
      </div>
    );
  }
}

import React from "react";
import ReactBnbGallery from "react-bnb-gallery";
import renderHTML from "react-render-html";

export default class NewsView extends React.Component {
  constructor() {
    super();
    this.state = {
      showMe: false,
      addClass: false,
      galleryOpened: false,
      buttonDescriptionText: "Więcej...",
      numberOfPhoto: 0
    };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  showText = () => {
    this.setState({
      showMe: !this.state.showMe,
      addClass: !this.state.addClass
    });

    if (this.state.showMe === false) {
      this.setState({ buttonDescriptionText: "Mniej..." });
    } else {
      this.setState({ buttonDescriptionText: "Więcej..." });
    }
  };

  toggleGallery(numberOfPhoto) {
    this.setState({
      galleryOpened: !this.state.galleryOpened,
      numberOfPhoto: numberOfPhoto
    });
  }

  render() {
    let boxClass = ["col-md-12 newsView-box-collaps-off"];
    if (this.state.addClass) {
      boxClass.push("newsView-box-collaps-on ");
    }

    return (
      <div className="newsView-box">
        <h2>{this.props.post.title}</h2>
        <div className="newsView-box-text">
          <div className={boxClass.join(" ")}>
            {this.state.showMe ? (
              <div className="newsView-box-text-show">
                {renderHTML(this.props.post.description)}
                <ReactBnbGallery
                  show={this.state.galleryOpened}
                  photos={this.props.post.pictures}
                  onClose={this.toggleGallery}
                  activePhotoIndex={this.state.numberOfPhoto}
                />
                <div className="newsView-box-img">
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
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary newsView-box-button"
          onClick={() => {
            this.showText();
          }}
        >
          {this.state.buttonDescriptionText}
        </button>{" "}
        <div className="newsView-box-date">
          data dodania: {this.props.post.post_date}
        </div>{" "}
      </div>
    );
  }
}

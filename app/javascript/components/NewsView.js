import React from "react";
import ReactBnbGallery from "react-bnb-gallery";
import renderHTML from "react-render-html";

export default class NewsView extends React.Component {
  photos = [];

  constructor() {
    super();
    this.state = {
      showMe: false,
      addClass: false,
      galleryOpened: false,
      buttonDescriptionText: "Więcej...",
      numberOfPhoto: 0
    };
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

  render() {
    let boxClass = ["col-md-12 newsView-box-collaps-off"];
    if (this.state.addClass) {
      boxClass.push("newsView-box-collaps-on ");
    }

    return (
      <div className="newsView-box">
        <h2>{this.props.news.content}</h2>
        <div className="newsView-box-text">
          <div className={boxClass.join(" ")}>
            {this.state.showMe ? (
              <div className="newsView-box-text-show">
                {renderHTML(this.props.news.description)}

                <ReactBnbGallery
                  show={this.state.galleryOpened}
                  photos={this.photos}
                  onClose={this.toggleGallery}
                  activePhotoIndex={this.state.numberOfPhoto}
                />
                <div className="newsView-box-img">
                  {(this.props.news.downloadURLs || []).map(
                    (downloadURL, i) => {
                      return (
                        <img
                          className="newsView-img"
                          onClick={() => this.toggleGallery(i)}
                          src={downloadURL}
                          key={i}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            ) : (
              renderHTML(this.shortText())
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
          data dodania: {this.props.news.date}
        </div>{" "}
      </div>
    );
  }
}

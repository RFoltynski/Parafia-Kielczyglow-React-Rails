import React, { Component } from "react";
import {
  fetchNewPosts,
  fetchPosts,
  setError,
  updatePostsPage,
} from "../../redux/ogloszenia/subreducers/posts/post.action";

import NewsView from "./NewsView";
import { connect } from "react-redux";

class NewsComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.per, this.props.page);
  }

  loadMore = () => {
    const {
      page,
      totalPages,
      per,
      updatePostsPage,
      fetchNewPosts,
      setError,
    } = this.props;

    if (page < totalPages) {
      updatePostsPage(page + 1);
      fetchNewPosts(per, page + 1);
    } else {
      setError("nie ma więcej postów");
    }
  };

  render() {
    let newsList = this.props.getPosts.map((post, id) => {
      return <NewsView post={post} key={id} />;
    });

    return (
      <div>
        <div>{newsList}</div>
        <center>
          {this.props.getError ? (
            <div
              className={"contact-error"}
              style={{ width: "80%", height: "80px", fontSize: "20px" }}
            >
              {" "}
              {this.props.getError}{" "}
            </div>
          ) : (
            <div />
          )}
          {this.props.totalPages > 1 ? (
            <button
              className={"button_default button_clicked"}
              style={{ margin: "15px 0" }}
              onClick={this.loadMore}
            >
              Więcej postów
            </button>
          ) : (
            <div />
          )}
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    fetchPosts,
    per,
    page,
    totalPages,
    pageLoadError,
  } = state.ogloszenia.posts;

  return {
    getPosts: fetchPosts,
    per: per,
    page: page,
    totalPages: totalPages,
    getError: pageLoadError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (per, page) => {
      dispatch(fetchPosts(per, page));
    },
    updatePostsPage: (payload) => {
      dispatch(updatePostsPage(payload));
    },
    fetchNewPosts: (per, page) => {
      dispatch(fetchNewPosts(per, page));
    },
    setError: (message) => {
      dispatch(setError(message));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsComponent);

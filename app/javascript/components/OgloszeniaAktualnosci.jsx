import React, { Component } from "react";
import axios from "axios";
import NewsView from "./NewsView";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/posts/post.action";

class OgloszeniaAktualnosci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      per: 2,
      totalPages: null,
      page: 1,
      pageLoadError: null,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { per, page } = this.state;
    const url = `api/v1/posts?per_page=${per}&page=${page}`;
    
    axios.get(url, {}, { "Content-Type": "application/json" }).then((res) => {
      this.setState({
        posts: res.data.data,
        totalPages: res.data.pages,
        isLoading: true,
      });
    });
  }

  handlePageClick = (data) => {
    const { per, totalPages, page, posts } = this.state;
    const url = `api/v1/posts?per_page=${per}&page=${page}`;

    axios.get(url, {}, { "Content-Type": "application/json" }).then((res) => {
      this.setState({
        posts: [...posts, ...res.data.data],
        totalPages: res.data.pages,
        isLoading: true,
      });
    });
  };

  loadMore = () => {
    const { page, totalPages } = this.state;

    if (page < totalPages) {
      this.setState(
        (prevState) => ({
          page: prevState.page + 1,
        }),
        this.handlePageClick
      );
    } else {
      this.setState({
        pageLoadError: "Nie ma więcej postów.",
      });
    }
  }

  handleClick = () => {
    this.props.fetchPosts()
  }

  render() {
    let newsList = this.state.isLoading
      ? this.state.posts.map((post) => {
          return <NewsView post={post} />;
        })
      : "loading";

    return (
      <div className="Ogloszenia-comp">
        <div className="news-boxes">
          <div className="col-md-10">{newsList}</div>
        </div>
        <center>
          {this.state.pageLoadError ? (
            <div
              className={"contact-error"}
              style={{ width: "80%", height: "80px", fontSize: "20px" }}
            >
              {" "}
              {this.state.pageLoadError}{" "}
            </div>
          ) : (
            <div />
          )}
          {this.state.totalPages > 1 ? (
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
        <div>{this.props.getPosts}</div>
        <button onClick={this.handleClick}> fetch posts </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getPosts: state.posts.fetchPosts
})

const mapDispatchToProps = (dispatch) => {
  return ({fetchPosts:(payload) => {
    dispatch(fetchPosts(payload))  
  }})
}

export default connect(mapStateToProps, mapDispatchToProps)(OgloszeniaAktualnosci);

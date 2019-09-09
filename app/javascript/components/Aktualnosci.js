import React from "react";
import NewsView from "./NewsView";
import Navbar from "./Navbar";
import axios from "axios";

function isSearched(searchTerm) {
  return function(item) {
    return (
      !searchTerm ||
      item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  };
}

class Aktualnosci extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchTerm: "",
      showSearch: false,
      isLoading: false,
      per: 2,
      totalPages: null,
      page: 1,
      pageLoadError: null
    };
  }

  componentWillMount() {
    const { per, totalPages, page } = this.state;
    const url = `api/v1/posts?per_page=${per}&page=${page}`;

    axios.get(url, {}, { "Content-Type": "application/json" }).then(res => {
      this.setState({
        posts: res.data.data,
        totalPages: res.data.pages,
        isLoading: true
      });
    });
  }

  showSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    });
  };

  searchValue = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handlePageClick = data => {
    const { per, totalPages, page, posts } = this.state;
    const url = `api/v1/posts?per_page=${per}&page=${page}`;

    axios.get(url, {}, { "Content-Type": "application/json" }).then(res => {
      this.setState({
        posts: [...posts, ...res.data.data],
        totalPages: res.data.pages,
        isLoading: true
      });
    });
  };

  loadMore = () => {
    const { page, totalPages } = this.state;

    if (page < totalPages) {
      this.setState(
        prevState => ({
          page: prevState.page + 1
        }),
        this.handlePageClick
      );
    } else {
      this.setState({
        pageLoadError: "Nie ma więcej postów."
      });
    }
  };

  render() {
    let newsList = this.state.isLoading
      ? this.state.posts.map(post => {
          return <NewsView post={post} />;
        })
      : "loading";

    return (
      <div className="aktualnosci-comp">
        <Navbar />
        <center>
          <h1 className="h1-header"> AKTUALNOŚCI </h1>
          <div className="aktualnosci-search">
            <form className={"form-group"}>
              <input
                type="text"
                onChange={this.searchValue}
                placeholder=" Szukaj..."
              />
            </form>
          </div>
        </center>
        <div className="news-boxes">
          <div className="col-md-10">{newsList}</div>
        </div>
        <center>
          {this.state.pageLoadError ? (
            <div className={"contact-error"} style={{ width: "80%" }}>
              {" "}
              {this.state.pageLoadError}{" "}
            </div>
          ) : (
            <div />
          )}
          {this.state.totalPages > 1 ? (
            <button
              className={"buttonWhite"}
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

export default Aktualnosci;

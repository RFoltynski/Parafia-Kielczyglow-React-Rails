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
      newses: [],
      searchTerm: "",
      showSearch: false,
      isLoading: false
    };
  }

  componentWillMount() {
    axios
      .get("api/v1/posts", {}, { "Content-Type": "application/json" })
      .then(res => {
        this.setState({
          posts: res.data.data,
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

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    let newsList = this.state.isLoading
      ? this.state.posts.filter(isSearched(this.state.searchTerm)).map(post => {
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
          <div className="col-md-10">
            <div>{newsList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aktualnosci;

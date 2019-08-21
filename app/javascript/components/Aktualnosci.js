import React from "react";
import NewsView from "./NewsView";
import Navbar from "./Navbar";
import search from "./img/search.png";
import axios from "axios";

function isSearched(searchTerm) {
  return function(item) {
    return (
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
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
      .get("posts.json", {}, { "Content-Type": "application/json" })
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
      <div className="aktualnosci-comp ">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 class="h1-header"> AKTUALNOŚCI </h1>
            <button onClick={this.showSearch} className="searchButton">
              <img className="searchButton-img" src={search} />
            </button>
            <form
              className={
                this.state.showSearch
                  ? "form-group showFormGroup"
                  : "hideFormGroup"
              }
            >
              <input
                type="text"
                onChange={this.searchValue}
                placeholder=" Szukaj..."
              />
            </form>
          </center>
          <div className="news-boxes">
            <div className="col-md-10">
              <div>{newsList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aktualnosci;

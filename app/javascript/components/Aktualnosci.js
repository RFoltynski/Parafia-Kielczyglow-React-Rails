import React from "react";
import NewsView from "./NewsView";
import Navbar from "./Navbar";

import search from "./img/search.png";

function isSearched(searchTerm) {
  return function(item) {
    return (
      !searchTerm ||
      item.content.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  };
}

class Aktualnosci extends React.Component {
  constructor() {
    super();
    this.state = {
      newses: [],
      searchTerm: "",
      showSearch: false
    };
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

  render() {
    let searchList = this.state.newses;
    console.log(searchList);

    let newsList = this.state.newses
      .filter(isSearched(this.state.searchTerm))
      .map(news => {
        return <NewsView news={news} />;
      })
      .reverse();

    return (
      <div className="aktualnosci-comp ">
        <div className="overlay">
          <Navbar />
          <center>
            <h1> AKTUALNOŚCI </h1>

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
            <div className="col-md-10">{newsList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aktualnosci;

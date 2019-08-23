import React from "react";
import NewsView from "./NewsView";
import Navbar from "./Navbar";
import search from "./img/search.png";
import axios from "axios";
import { Transition, animated } from "react-spring/renderprops";

function isSearched(searchTerm) {
  return function(item) {
    return (
      !searchTerm ||
      item.title.toLowerCase().indexOf(searchTerm) !== -1 ||
      item.description.toLowerCase().indexOf(searchTerm) !== -1
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
            <h1 className="h1-header"> AKTUALNOŚCI </h1>
            <div className="aktualnosci-search">
              <button onClick={this.showSearch} className="searchButton">
                <img className="searchButton-img" src={search} />
              </button>

              <Transition
                items={this.state.showSearch}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                config={{ duration: 500 }}
              >
                {show =>
                  show &&
                  (props => (
                    <animated.div style={props}>
                      <form className={"form-group showFormGroup"}>
                        <input
                          type="text"
                          onChange={this.searchValue}
                          placeholder=" Szukaj..."
                        />
                      </form>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
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

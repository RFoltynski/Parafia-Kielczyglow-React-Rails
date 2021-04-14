import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Ogloszenia from "./components/Ogloszenia";
import Duchowienstwo from "./components/Duchowienstwo";
import Kontakt from "./components/Kontakt";
import Parafia from "./components/Parafia";
import Inne from "./components/Inne";
import PageNotFound from "./components/elements/PageNotFound";
import Cmentarz from "./components/Cmentarz";
import Main from "./components/Main";

import CmentarzInfo from "./components/subcomponents/cmentarz/CmentarzInfo";
import Kaplica from "./components/subcomponents/cmentarz/Kaplica";
import Pogrzeby from "./components/subcomponents/cmentarz/Pogrzeby";

import { Provider } from "react-redux";
import store from "./redux/store";

export default class Router extends React.Component {
  cmentarz = () => {
    return (
      <Main
        componentsList={[
          ["Cmentarz", <CmentarzInfo key={1} />],
          ["Kaplica", <Kaplica key={2} />],
          ["Pogrzeby", <Pogrzeby key={3} />],
        ]}
        header={"cmentarz"}
      />
    );
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Ogloszenia" component={Ogloszenia} />
            <Route path="/cmentarz" component={this.cmentarz} />
            <Route path="/Duchowienstwo" component={Duchowienstwo} />
            <Route path="/parafia" component={Parafia} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/inne" component={Inne} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router />,
    document.body.appendChild(document.createElement("div"))
  );
});

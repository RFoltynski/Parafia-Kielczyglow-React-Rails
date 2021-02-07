import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./../components/App";
import Ogloszenia from "./../components/Ogloszenia";
import Kaplani from "./../components/Kaplani";
import Kontakt from "./../components/Kontakt";
import Parafia from "./../components/Parafia";
import Inne from "./../components/Inne";
import PageNotFound from "./../components/PageNotFound";
import Cmentarz from "../components/Cmentarz";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Ogloszenia" component={Ogloszenia} />
          <Route path="/cmentarz" component={Cmentarz} />
          <Route path="/kaplani" component={Kaplani} />
          <Route path="/parafia" component={Parafia} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/inne" component={Inne} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router />,
    document.body.appendChild(document.createElement("div"))
  );
});

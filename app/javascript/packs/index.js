import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/MainPage";
import PageNotFound from "./components/elements/PageNotFound";
import {
  cmentarz,
  duchowienstwo,
  inne,
  ogloszenia,
  kontakt,
  parafia,
} from "./components/ComponentsList";

import { Provider } from "react-redux";
import store from "./redux/store";

export default class Router extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Ogloszenia" component={ogloszenia} />
            <Route path="/cmentarz" component={cmentarz} />
            <Route path="/Duchowienstwo" component={duchowienstwo} />
            <Route path="/parafia" component={parafia} />
            <Route path="/kontakt" component={kontakt} />
            <Route path="/inne" component={inne} />
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

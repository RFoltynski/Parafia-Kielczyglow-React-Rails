import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  cmentarz,
  duchowienstwo,
  inne,
  kontakt,
  ogloszenia,
  parafia,
} from "./components/ComponentsList";

import App from "./components/App";
import PageNotFound from "./components/elements/PageNotFound";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
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
  const div = document.createElement("div");
  div.classList.add("react-app");
  ReactDOM.render(<Router />, document.body.appendChild(div));
});

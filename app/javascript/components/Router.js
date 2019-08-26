import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Aktualnosci from "./Aktualnosci";
import Intencje from "./Intencje";
import Kaplani from "./Kaplani";
import Kontakt from "./Kontakt";
import Parafia from "./Parafia";
import Inne from "./Inne";
import PageNotFound from "./PageNotFound";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/aktualnosci" component={Aktualnosci} />
          <Route path="/intencje" component={Intencje} />
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

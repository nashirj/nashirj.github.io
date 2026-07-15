import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Technical from "../pages/technical/Technical";
import Music from "../pages/music/Music";
import Outdoors from "../pages/outdoors/Outdoors";
import Quintessence from "../pages/quintessence/Quintessence";
import Contact from "../pages/contact/Contact";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/technical"
            render={(props) => (
              <Technical {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/music"
            render={(props) => <Music {...props} theme={this.props.theme} />}
          />
          <Route
            path="/outdoors"
            render={(props) => (
              <Outdoors {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/quintessence"
            render={(props) => (
              <Quintessence {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

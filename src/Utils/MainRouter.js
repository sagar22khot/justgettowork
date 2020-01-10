import React, { Component } from "react";
import App from "../Views/Home";
import ToDoList from "../Views/ToDoList";
import Navigation from "../Components/Navigation";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
export class MainRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Navigation} />
          {/* <Switch> */}
          <Route exact path="/" component={App} />
          <Route path="/todolist" component={ToDoList} />
          {/* <Route component={Notfound} /> */}
          {/* </Switch> */}
          {/* <Route path="/" component={SiteInfo} /> */}
        </Router>
      </div>
    );
  }
}

export default MainRouter;

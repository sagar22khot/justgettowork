import React, { Component } from "react";
import App from "../Views/Home";
import ToDoList from "../Views/ToDoList";
import Login from "../Views/Login";
import Register from "../Views/Register";
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route component={Notfound} /> */}
          {/* </Switch> */}
          {/* <Route path="/" component={SiteInfo} /> */}
        </Router>
      </div>
    );
  }
}

export default MainRouter;

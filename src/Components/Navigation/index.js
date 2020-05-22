import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {Container, NavWrapper, NavItems, NavText, Logo} from "./styled";
import logo from "../../Assets/logo.png";

export class Navigation extends Component {
  render() {
    return (
      <Container>
      <Logo bgimage = {logo}></Logo>
       <NavWrapper>
         <NavItems>
            <NavText 
            exact
            to="/"
            >Home</NavText>
         </NavItems>
         <NavItems>
            <NavText
            to="/todolist"
            >Your To Do List</NavText>
         </NavItems>
         <NavItems>
            <NavText>Scheduler</NavText>
         </NavItems>
         <NavItems>
            <NavText to="/login">Login</NavText>
         </NavItems>
       </NavWrapper>
      </Container>
    );
  }
}

export default Navigation;

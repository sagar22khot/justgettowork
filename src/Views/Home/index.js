import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {Container, CenterWrapper, MainTitle, TitleWrapper, AddContent, AddContentWrapper, AddContentButtonWrapper, AddContentButton, ToDoImage} from "./styled";
import todolist from "../../Assets/todolist.jpg";
import minitodolist from "../../Assets/minitodolist.jpg";
import centerbg from "../../Assets/centerbg.jpg";

export class Home extends Component {
  render() {
    return (
      <Container bgimage = {todolist}>
        <TitleWrapper>
        <MainTitle>Just Get To Work</MainTitle>
        </TitleWrapper> 
       <CenterWrapper bgimage = {centerbg}>
         <AddContentWrapper>
           <AddContent placeholder = "    Add your task here . . ."></AddContent>
        </AddContentWrapper>
         <AddContentButtonWrapper>
           <AddContentButton>Add Task</AddContentButton>
           <ToDoImage bgimage = {minitodolist}></ToDoImage>
         </AddContentButtonWrapper>
       </CenterWrapper>
      </Container>
    );
  }
}

export default Home;

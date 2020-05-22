import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {Container, RightWrapper, LeftWrapper, ToDoListWrapper, ToDoHeader, ToDoHeaderTag, ToDoBody, ToDoItem, StrikeWrapper, DoneDiv, CancelDiv
, StrikeDiv, AddTaskWrapper, SubAddTaskWrapper, AddTaskHeader, AddTaskHeaderDiv, TaskbarAddDiv, CalenderDiv, TaskBar, DisplayCalenderDates, 
SelectCalender, BasicCalender, DisplayCalenderHeader, MiniCalenderDiv, MiniCalenderDivYear, MiniCalenderDivSlash, SubAddTaskWrapperFinal, 
MiniCalenderDivTime, TimeDiv, MiniTimeDivSlash, SubmitTaskButton} from "./styled";
import axios from "axios";
import bg_todo from "../../Assets/bg_todo.jpg";
import Calendar from 'react-calendar';

let mock_data = [
  {
    data: "Make Food"
  },
  {
    data: "Make Bed"
  },
  {
    data: "Check bills"
  },
  {
    data: "Look for keys"
  },
  {
    data: "Call Best Buy"
  },
  {
    data: "Call ups"
  },
  {
    data: "Clean room"
  },
  {
    data: "Watch TV"
  },
  {
    data: "Meet Professor"
  },
  {
    data: "Call Home"
  }
]

export class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calenderToggle: 0,
      timeToggle: 0,
      date: new Date(),
      timeSave: [[], []],
      todotask: "",
      allExercises: []
    };
  }

  componentDidMount(){
    axios.get("http://watchmyback.me:5000/exercises?page=1&limit=10").then(res => console.log("All exercises", this.setState({
      allExercises: res.data
    }) ))
  }

  onChange = date => this.setState({ date })

  onFinalButtonClick = () => {
    console.log(" Task: ", this.state.todotask, " Day: ", this.state.date.toString().split(" ")[1], " ",
    this.state.date.toString().split(" ")[2], " ", this.state.date.toString().split(" ")[3], " Time: ", 
    this.state.timeSave[0][this.state.timeSave[0].length - 1], this.state.timeSave[1][this.state.timeSave[1].length - 1])

  var body = {
      "username": "Temp",
      "description": this.state.todotask.toString(),
      "duration": this.state.timeSave[0][this.state.timeSave[0].length - 1].toString() + this.state.timeSave[1][this.state.timeSave[1].length - 1].toString(),
      "date": this.state.date.toString().split(" ")[1].toString() + this.state.date.toString().split(" ")[2].toString() + "/" + this.state.date.toString().split(" ")[3].toString(),
  }
  axios.post("http://watchmyback.me:5000/exercises/add", body).then(res => console.log("Final", res.data))
  window.location.reload(false)
  }

  render() {
    return (
      <Container bgimage = {bg_todo}>
          <LeftWrapper>

              <AddTaskWrapper>
                <AddTaskHeaderDiv onMouseEnter = {() => {this.setState({calenderToggle: 0})}}>
                  <AddTaskHeader>Add To Do Task</AddTaskHeader>
                  <TaskbarAddDiv>
                    <TaskBar onChange = {event => {this.setState({todotask: event.target.value})}} placeholder = "    Add your take here . . . " required></TaskBar>
                  </TaskbarAddDiv>
                </AddTaskHeaderDiv>
                <SubAddTaskWrapper>
                  <CalenderDiv>
                    <DisplayCalenderHeader>Select Task Completion Date: </DisplayCalenderHeader>
                    <DisplayCalenderDates onClick = {() => {this.setState({calenderToggle: 1})}} 
                        onMouseEnter = {() => {this.setState({calenderToggle: 1})}} 
                        // onMouseLeave = {() => {this.setState({calenderToggle: 0})}}
                        >
                      <MiniCalenderDiv>{this.state.date.toString().split(" ")[1]}</MiniCalenderDiv>
                      <MiniCalenderDivSlash>/</MiniCalenderDivSlash>
                      <MiniCalenderDiv>{this.state.date.toString().split(" ")[2]}</MiniCalenderDiv>
                      <MiniCalenderDivSlash>/</MiniCalenderDivSlash>
                      <MiniCalenderDivYear>{this.state.date.toString().split(" ")[3]}</MiniCalenderDivYear>
                    </DisplayCalenderDates>
                    <SelectCalender calenderToggle = {this.state.calenderToggle} onMouseLeave = {() => {this.setState({calenderToggle: 0})}}>
                    <BasicCalender
                      onChange={this.onChange}
                      value={this.state.date}
                      // onClick = {() => {this.setState({calenderToggle: 1})}} 
                      // onMouseEnter = {() => {this.setState({calenderToggle: 1})}} 
                      onMouseLeave = {() => {this.setState({calenderToggle: 0})}}
                    />
                    </SelectCalender>
                    
                  {/* {console.log("Date:", this.state.date.toString().split(" "))} */}
                  </CalenderDiv>
                  <TimeDiv>
                  <DisplayCalenderHeader>Select Time of Completion: </DisplayCalenderHeader>
                  <DisplayCalenderDates>
                    <MiniCalenderDivTime placeholder = "hours" style= {{textAlign: "center"}} onChange={event => {this.state.timeSave[0].push(event.target.value);
                    this.setState({
                      timeSave: this.state.timeSave
                    })
                    }}>
                    
                    </MiniCalenderDivTime>

                    <MiniTimeDivSlash>
                    :
                    </MiniTimeDivSlash>
                   
                    <MiniCalenderDivTime placeholder = "minutes" style= {{textAlign: "center"}} onChange={event => {this.state.timeSave[1].push(event.target.value);
                    this.setState({
                      timeSave: this.state.timeSave
                    })
                    }}>
                    
                    </MiniCalenderDivTime>
                    
                  </DisplayCalenderDates>
                  </TimeDiv>
                </SubAddTaskWrapper>
                <SubAddTaskWrapperFinal>
                      <SubmitTaskButton onClick = {() => this.onFinalButtonClick()}>Click To Add Task!</SubmitTaskButton>
                </SubAddTaskWrapperFinal>
              </AddTaskWrapper>

          </LeftWrapper>
          <RightWrapper>
              <ToDoListWrapper>
                <ToDoHeader>
                  <ToDoHeaderTag>To Do List</ToDoHeaderTag>
                </ToDoHeader>
                <ToDoBody>
                  {console.log("closer", this.state.allExercises)}
                  {this.state.allExercises.results && this.state.allExercises.results.map((val, i) => (
                      <ToDoItem>{i + 1}. {val.description}<StrikeWrapper className = "StrikeWrapper">
                        <DoneDiv onClick = {() => {
                          console.log(this.state.allExercises)
                          var url = "http://watchmyback.me:5000/exercises/" + this.state.allExercises.results[i]._id
                          console.log("url", url)
                          axios.delete(url).then(res => console.log("deleted"))
                          console.log( this.state.allExercises.results[i]._id)
                          
                          axios.get("http://watchmyback.me:5000/exercises?page=1&limit=10").then(res => console.log("All exercises", this.setState({
                            allExercises: res.data
                          }) ))

                          setTimeout(() => {
                            window.location.reload(false)
                          }, 300);
                            
                          
                        }}>
                          Delete Task
                        </DoneDiv>
                        <CancelDiv>
                          Done Task
                        </CancelDiv></StrikeWrapper></ToDoItem>
                  ))}
                </ToDoBody>
              </ToDoListWrapper>
          </RightWrapper>
      </Container>
    );
  }
}

export default ToDoList;

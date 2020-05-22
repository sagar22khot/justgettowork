import styled from "styled-components"
import Calendar from 'react-calendar';

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    // border: 1px solid red;
    // background-image: url(${props => props.bgimage});
    // // background-color: transparent;
    // // height: 500px;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    transition:300ms height linear;
    @media screen and (max-height: 800px){
        height: 1500px;
    }
`;

const RightWrapper = styled.div`
    width: 60%;
    height: 100%;
    float: right;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid red;
    // @media screen and (max-height: 800px){
    //     height: 75%;
    //     width: 50%;
    // }
    @media screen and (max-width: 800px){
        height: 75%;
        width: 100%;
        clear: both;
    }
    @media screen and (max-width: 1400px){
        height: 75%;
        width: 100%;
        clear: both;
    }
`;

const ToDoListWrapper = styled.div`
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 1px solid brown;
    border-radius: 20px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: #fff48e;
`;

const ToDoHeader = styled.div`
    width: 100%;
    height: 15%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 1px solid brown;
`

const ToDoHeaderTag = styled.h1`
    font-family: 'Covered By Your Grace', cursive;
    font-size: 80px;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0px;
`;

const ToDoBody = styled.div`
    width: 100%;
    height: 85%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
`;

const ToDoItem = styled.div`
    width: 80%;
    height: 10%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 1px solid black;
    font-family: 'Covered By Your Grace', cursive;
    font-family: 'Merienda One', cursive;   
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    &:hover{
        .StrikeWrapper {
            display: block
            background-color: #F9F3EE;
            opacity: 0.9;
        }
    }
`;

const StrikeWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid black;
    border-radius: 30px;
    position: absolute;
    display: none;
`;

const DoneDiv = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid red;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-family: "Oswald", sans-serif;
    &:hover {
        color: white
        background-color: brown
    };
`;

const CancelDiv = styled.div`
    width: 30%;
    height: 100%;
    float: right;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid red;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-family: "Oswald", sans-serif;
    &:hover {
        color: white
        background-color: brown
    };
`;

const StrikeDiv = styled.div``;

const LeftWrapper = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-right: 1px dashed red;
    @media screen and (max-width: 800px){
        height: 75%;
        width: 100%;
        clear: both;
    }
    @media screen and (max-width: 1400px){
        height: 75%;
        width: 100%;
        clear: both;
    }
`;

const AddTaskWrapper = styled.div`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 4px solid maroon;
    position: relative;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 20px;
    background-color: #FFC400;
    padding: 20px;
`;

const SubAddTaskWrapper = styled.div`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid maroon;
    position: relative;
    width: 100%;
    height: 50%;
`;

const SubAddTaskWrapperFinal = styled.div`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid pink;
    position: relative;
    width: 100%;
    height: 10%;
`;

const SubmitTaskButton = styled.div`
    // height: 100%;
    // width: 40%;
    // position: relative;
    // left: 50%;
    // transform: translateX(-50%);
    // box-sizing: border-box;
    // -moz-box-sizing: border-box;
    // -webkit-box-sizing: border-box;
    // border: 3px solid black;
    // border-radius: 10px;

    color: white;
    text-decoration: none;
    // display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;
    padding: 10px;
    &:hover {
      background-color: grey;
    }
    font-weight: bold;
    background-color: #5e320e;
    cursor: pointer;
    border: none;
    @media screen and (min-width: 1400px) and (max-width: 2000px) {
      font-size: 20px;
    }
    @media screen and (min-width: 1000px) and (max-width: 1399px) {
      font-size: 16px;
    }
    @media screen and (max-width: 999px) {
      font-size: 14px;
    }
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border: 0.5px solid white;
    border-radius: 10px;
    box-shadow: 0 9px 5px #5c5855;
    &:active {
      background-color: grey;
      box-shadow: 0 2px #666;
      transform: translateY(-42%) translateX(-50%);
    }
`;

const TaskbarAddDiv = styled.div`
    width: 100%;
    height: 70%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid black;
`;

const TaskBar = styled.input`
    width: 80%;
    height: 60%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 5px solid black;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 30px;
    border-radius: 20px;
`;

const DisplayCalenderHeader = styled.h3`
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 30px;
    font-family: "Oswald", sans-serif;
`;

const DisplayCalenderDates = styled.div`
    width: 100%;
    height: 40%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid red;
`;

const SelectCalender = styled.div`
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid red;
    display: ${props => props.calenderToggle === 0 ? "none" : "block"};
`;

const CalenderDiv = styled.div`
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid blue;
`;

const TimeDiv = styled.div`
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid blue;
`;

const MiniCalenderDiv = styled.div`
    width: 17%;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 3px solid brown;
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 20px;
    &:hover {
        background-color: brown;
        color: white;
    }
    cursor: pointer;
    background-color: white;
`;

const MiniCalenderDivSlash = styled.div`
    width: 17%;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;

const MiniTimeDivSlash = styled.div`
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid brown;
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;

const MiniCalenderDivYear = styled.div`
    width: 32%;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 3px solid brown;
    border-radius: 20px;
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    &:hover {
        background-color: brown;
        color: white;
    }
    cursor: pointer;
    background-color: white;
`;

const MiniCalenderDivTime = styled.input`
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 3px solid brown;
    border-radius: 20px;
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: black;
    &:hover {
        background-color: grey;
        ::placeholder { /* Most modern browsers support this now. */
            color:    white;
        }   
    }
    cursor: pointer;
`;

const AddTaskHeaderDiv = styled.div`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    // border: 1px solid yellow;
    position: relative;
    width: 100%;
    height: 40%;
`;

const AddTaskHeader = styled.h3`
    height: 30%;
    width: 100%;
    position: relative;
    // top: 50%;
    // transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    font-size: 50px;
    font-family: "Oswald", sans-serif;
`;

const BasicCalender = styled(Calendar)`
    position: relative;
    // top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`;

export { Container, RightWrapper, LeftWrapper, ToDoListWrapper, ToDoHeader, ToDoHeaderTag, ToDoBody, ToDoItem, 
    StrikeWrapper, DoneDiv, CancelDiv, StrikeDiv, AddTaskWrapper, SubAddTaskWrapper, AddTaskHeader, AddTaskHeaderDiv, 
    TaskbarAddDiv, CalenderDiv, TaskBar, DisplayCalenderDates, SelectCalender, BasicCalender, DisplayCalenderHeader, 
    MiniCalenderDiv, MiniCalenderDivYear, MiniCalenderDivSlash, SubAddTaskWrapperFinal, MiniCalenderDivTime, TimeDiv,
    MiniTimeDivSlash, SubmitTaskButton}
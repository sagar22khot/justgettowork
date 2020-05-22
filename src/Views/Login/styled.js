import styled from "styled-components"
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    // border: 1px solid black;
    transition:300ms height linear;
    @media screen and (max-height: 800px){
        height: 1000px;
    }
    // background-image: linear-gradient(to left bottom, #a47630, #90642c, #7c5329, #684424, #53351f);
    background-image: url(${props => props.bgimage});
    // background-color: transparent;
    // height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const CenterWrapper = styled.div`
    height: 70%;
    width: 30%;
    border: 4px solid black;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition:300ms height linear;
   
    border-radius: 20px;
    background-color: #ffd092;
    // @media screen and (max-height: 800px){
        //     height: 75%;
        //     width: 50%;
        // }
        @media screen and (max-width: 800px){
            height: 75%;
            width: 90%;
            clear: both;
        }
        @media screen and (max-width: 1400px){
            height: 75%;
            width: 90%;
            clear: both;
        }
`;

const MainTitle = styled.div`
    height: 20%;
    width: 100%;
    // border: 1px solid blue;
    background-color: #ff9000;
    border-radius: 20px 20px 0px 0px;
`;

const MainTitleText = styled.h3`
    // height: 20%;
    width: 40%;
    font-size: 30px;
    // border: 1px solid blue;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin: 0px;
    text-align: center;
`;

const LoginDetailsWrap = styled.div`
    height: 60%;
    width: 100%;
    // border: 1px solid red;
`;

const UsernameWrap = styled.div`
    height: 33.33%;
    width: 100%;
`;

const PasswordWrap = styled.div`
    height: 33.33%;
    width: 100%;
    // border: 1px solid blue;
    // border-top: 2px solid brown;
`;

const LoginButtonWrap = styled.div`
    height: 33.33%;
    width: 100%;
    // border: 1px solid blue;
`;

const DetailsTempWrapper = styled.div`
    width: 75%;
    height: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    // border: 1px solid red;
`;

const DetailTitle = styled.h4`
    height: 40%;
    width: 100%;
    // border: 1px solid blue;
    display: flex;
    // justify-content: center;
    align-items: center;
    margin: 0px;
`;

const DetailInputBox = styled.div`
    height: 60%;
    width: 100%;
    // border: 1px solid blue;
`;

const LoginButton = styled.div`
    height: 50%;
    width: 50%;
    border: 3px solid brown;
    border-radius: 10px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Credentials = styled.input`
    width: 100%;
    height: 60%;
    border: 3px solid black;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;

`;

const SubmitTaskButton = styled.div`
    color: white;
    text-decoration: none;
    // display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    padding: 10px;
    &:hover {
      background-color: grey;
    }
    font-weight: bold;
    background-color: #c26e00;
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

const AlreadyWrapper = styled.div`
    height: 20%;
    // border: 1px solid red;
    width: 100%;
`;
const AlreadyDetails = styled.h4`
    // width: 60%;
    height: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
`;

const AddOnRegister = styled(Link)`

`;

export {Wrapper, CenterWrapper, MainTitle, LoginDetailsWrap, UsernameWrap, PasswordWrap, LoginButtonWrap, DetailsTempWrapper,
     DetailTitle, DetailInputBox, LoginButton, MainTitleText, Credentials, SubmitTaskButton, AlreadyWrapper, AlreadyDetails, AddOnRegister}
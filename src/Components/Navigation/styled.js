import styled from "styled-components"
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100px;
    // border: 1px solid red;
    background-color: #F9F3EE;
`;

const NavWrapper = styled.div`
    height: 100px;
    // border: 1px solid green;
    float: right;
    @media screen and (max-width: 999px){
        display: none;
    }
    @media screen and (max-width: 1399px){
        width: 60%;
    }
    @media screen and (min-width: 1400px){
        width: 40%;
    }
`;

const NavItems = styled.li`
    width: 25%;
    height: 100%;
    // background-color: red;
    display: inline-block;
    border-radius: 10px;
    &:hover{
        background-color: #F9E5D1;
    };
    &:active{
        background-color: #F9E5D1;
    }
`;

const NavText = styled(Link)`
    width: 100%;
    height: 100%;
    // border: 1px solid black;
    margin: 0px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
`;

const Logo = styled.div`
    background-image: url(${props => props.bgimage});
    background-color: transparent;
    height: 80%;
    width: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    float: left;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

export { Container, NavWrapper, NavItems, NavText, Logo }
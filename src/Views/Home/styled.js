import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    // border: 1px solid red;
    background-image: url(${props => props.bgimage});
    // background-color: transparent;
    // height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition:300ms height linear;
    @media screen and (max-height: 800px){
        height: 1500px;
    }
`;

const TitleWrapper = styled.div`
    height: 40%;
    width: 100%;
`;

const MainTitle = styled.h1`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    // border: 1px solid red;
    margin: 0px;
    padding: 0px;
    text-align: center;
    color: #703C07;
    -webkit-text-fill-color: #C3874C;
    -webkit-text-stroke-color: #321900;
    @media screen and (min-width: 1600px){
        font-size: 200px;
        -webkit-text-stroke-width: 8px;
    }
    @media screen and (max-width: 1599px){
        font-size: 100px;
        -webkit-text-stroke-width: 6px;
    }
`;

const CenterWrapper = styled.div`
    width: 90%;
    height: 40%;
    border: 3px solid black;
    background-color: #7A4918;
    border-radius: 10px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(${props => props.bgimage});
    background-color: transparent;
    // height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 3px 3px 50px 20px #000;
`;

const AddContentWrapper = styled.div`
    width: 50%;
    height: 100%;
    // border: 1px solid blue;
    position: relative;
    display: inline-block;
    transition: width 300ms linear;
    @media screen and (max-width: 999px){
        width: 70%;
    }

`;

const AddContent = styled.input`
    width: 80%;
    height: 100px;
    border: 3px solid black;
    border-radius: 10px;
    position: relative;
    float: right;
    top: 50%
    transform: translateY(-50%);
    font-size: 30px;
`;

const AddContentButtonWrapper = styled.div`
    width: 50%;
    height: 100%;
    // border: 1px solid pink;
    position: relative;
    display: inline-block;
    transition: width 300ms linear;
    @media screen and (max-width: 999px){
        width: 30%;
    }
`;

const AddContentButton = styled.div`
    width: 20%;
    height: 100px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #8E4904;
    position: relative;
    float: left;
    top: 50%
    font-size: 20px;
    color: white;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 999px){
        width: 50%;
    }
`;

const ToDoImage = styled.div`
    width: 50%;
    height: 90%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    // border: 1px solid red;
    float: right;
    margin-right: 10%;
    background-image: url(${props => props.bgimage});
    background-color: transparent;
    // height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @media screen and (max-width: 999px){
        display: none;
    }
`;


export { Container, CenterWrapper, MainTitle, TitleWrapper, AddContentWrapper, AddContent, AddContentButtonWrapper, AddContentButton, ToDoImage }
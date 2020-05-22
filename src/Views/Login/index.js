import React, {Component} from "react";
import {Wrapper, CenterWrapper, MainTitle, LoginDetailsWrap, UsernameWrap, PasswordWrap, LoginButtonWrap, DetailsTempWrapper, 
    DetailTitle, DetailInputBox, LoginButton, MainTitleText, Credentials, SubmitTaskButton, AlreadyWrapper, AlreadyDetails, AddOnRegister} from "./styled";
import bglogin from "../../Assets/loginWall.jpg"

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <Wrapper bgimage = {bglogin}>
                <CenterWrapper>
                    <MainTitle>
                        <MainTitleText>Sign In</MainTitleText>
                    </MainTitle>
                    <LoginDetailsWrap>
                        <UsernameWrap>
                            <DetailsTempWrapper>
                                <DetailTitle>Username: </DetailTitle>
                                <DetailInputBox>
                                    <Credentials></Credentials>
                                </DetailInputBox>
                            </DetailsTempWrapper>
                        </UsernameWrap>
                        <PasswordWrap>
                            <DetailsTempWrapper>
                                <DetailTitle>Password: </DetailTitle>
                                <DetailInputBox>
                                <Credentials></Credentials>
                                </DetailInputBox>
                            </DetailsTempWrapper>
                        </PasswordWrap>
                        <LoginButtonWrap>
                            <DetailsTempWrapper>
                                <SubmitTaskButton>Login</SubmitTaskButton>
                            </DetailsTempWrapper>
                        </LoginButtonWrap>
                    </LoginDetailsWrap>
                    <AlreadyWrapper>
                        <AlreadyDetails>Not a member yet?&nbsp; <AddOnRegister to = "/register"> Register Here!</AddOnRegister> </AlreadyDetails>
                    </AlreadyWrapper>
                </CenterWrapper>
            </Wrapper>
        )
    }
}

export default Login;
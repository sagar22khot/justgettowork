import React, {Component} from "react";
import {Wrapper, CenterWrapper, MainTitle, RegisterDetailsWrap, RegisterButtonWrap, DetailsTempWrapper, 
      MainTitleText, SubmitTaskButton, AlreadyWrapper, AlreadyDetails, AddOnRegister, RegDetailsWrap, 
      RegDetailHalfWrap, RegDetailfullWrap, DivCredTemp, CredentialNames, CredentialInputs, InputDivs} from "./styled";
import bglogin from "../../Assets/loginWall.jpg";
import axios from "axios";
export class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
    }

    onRegistration = () => {

        var body = {
            "username": this.state.username
        }
        console.log(this.state.username);
        axios.post("http://localhost:5000/users/add", body).then(res => console.log("Final", res.data))
    }

    render(){
        return (
            <Wrapper bgimage = {bglogin}>
                <CenterWrapper>
                    <MainTitle>
                        <MainTitleText>Register</MainTitleText>
                    </MainTitle>
                    <RegisterDetailsWrap>
                        <RegDetailsWrap>
                            <RegDetailHalfWrap>
                                <CredentialNames><DivCredTemp>First Name: </DivCredTemp></CredentialNames>
                                <CredentialInputs>
                                    <InputDivs placeholder = "     Enter First Name" ></InputDivs>
                                </CredentialInputs>
                            </RegDetailHalfWrap>
                            <RegDetailHalfWrap>
                                <CredentialNames><DivCredTemp>Last Name: </DivCredTemp></CredentialNames>
                                <CredentialInputs>
                                    <InputDivs placeholder = "     Enter Last Name"></InputDivs>
                                </CredentialInputs>
                            </RegDetailHalfWrap>
                        </RegDetailsWrap>
                        <RegDetailsWrap>
                            <RegDetailfullWrap>
                                <CredentialNames><DivCredTemp>Username: </DivCredTemp></CredentialNames>
                                <CredentialInputs>
                                    <InputDivs placeholder = "     Enter Username" onChange={event => {this.setState({username: event.target.value})}}></InputDivs>
                                </CredentialInputs>
                            </RegDetailfullWrap>
                        </RegDetailsWrap>
                        <RegDetailsWrap>
                            <RegDetailfullWrap>
                                <CredentialNames><DivCredTemp>Email ID: </DivCredTemp></CredentialNames>
                                <CredentialInputs>
                                    <InputDivs placeholder = "     Enter Email ID"></InputDivs>
                                </CredentialInputs>
                            </RegDetailfullWrap>
                        </RegDetailsWrap>
                        <RegDetailsWrap>
                            <RegDetailHalfWrap>
                                <CredentialNames><DivCredTemp>New Password: </DivCredTemp></CredentialNames>
                                <CredentialInputs>
                                    <InputDivs placeholder = "     Enter New Password"></InputDivs>
                                </CredentialInputs>
                            </RegDetailHalfWrap>
                            <RegDetailHalfWrap>
                                <CredentialNames><DivCredTemp>Confirm Passoword: </DivCredTemp></CredentialNames>
                                <CredentialInputs>
                                    <InputDivs placeholder = "     Re-Enter New Password"></InputDivs>
                                </CredentialInputs>
                            </RegDetailHalfWrap>
                        </RegDetailsWrap>
                        <RegisterButtonWrap>
                            <SubmitTaskButton onClick = {() => this.onRegistration()}>Register</SubmitTaskButton>
                        </RegisterButtonWrap>
                    </RegisterDetailsWrap>
                    <AlreadyWrapper>
                        <AlreadyDetails>Already a member?&nbsp; <AddOnRegister to = "/login"> Login Here!</AddOnRegister> </AlreadyDetails>
                    </AlreadyWrapper>
                </CenterWrapper>
            </Wrapper>
        )
    }
}

export default Register;
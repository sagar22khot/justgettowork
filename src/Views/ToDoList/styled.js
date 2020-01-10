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

export { Container}
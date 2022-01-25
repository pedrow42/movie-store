import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 80%;
    margin: 150px auto;
    @media(max-width: 600px){
        margin: 220px auto;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    align-content: center;
    gap: 25px;
    padding-bottom: 20px;
    @media(max-width: 800px){
        grid-template-columns: repeat(auto-fit, 230px);
    }
`

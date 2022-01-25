import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    background-color: #183040;
    padding: 20px 0;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
    @media(max-width: 600px){
        flex-direction: column;
    }
`
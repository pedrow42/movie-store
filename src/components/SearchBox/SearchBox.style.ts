import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

export const InputText = styled.input`
    width: 300px;
    height: 40px;
    font-size: 20px;
    padding: 0 10px;
    outline: none;
    border: 0px;
    border-radius: 5px;
    @media(max-width: 600px){
        margin: 10px 0;
    }
    @media(max-width: 400px){
        width: 80%;
        font-size: 16px;
    }
`

export const Icon = styled(SearchIcon)`
    position: relative;
    top: 6px;
    left: -35px;
    color: black;
    cursor: pointer;
`
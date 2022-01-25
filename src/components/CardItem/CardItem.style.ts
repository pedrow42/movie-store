import styled from "styled-components";
import { Button } from '@mui/material';

export const CardItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    text-align: center;
    box-shadow: 2px 2px 8px 1px #1A242F;
    border-radius: 6px;
    position: relative;
    img{
        height: 100%;
        border-radius: 0 0 6px 6px;
    }
`
export const CardItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    width: 100%;
    padding: 8px 0;
    font-size: 18px;
    background-color: #fff;
    color: #183040;
    @media(max-width: 800px){
        font-size: 16px;
    }
    h3{
        height: 60px;
        display: flex;
        align-items: center;
        max-width: 90%;
        line-height: 22px;
        overflow-y: hidden;
        @media(max-width: 600px){
            height: 40px; 
        }
    }
`
export const ButtonItem = styled(Button)`
    background-color: #A62014;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0;
    width: 100%;
    height: 40px;

    border-radius: 0 0 6px 6px;
    &:hover{
        background-color: #0D0D0D;
    }
`
export const CardGender = styled.div`
    display: flex;
    
`
export const CardRating = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
`
export const CardHeartDiv = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: end;
    background-color: #fff;
    border-radius: 6px 6px 0 0;
`



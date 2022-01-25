import styled from 'styled-components'

export const CartWrapper = styled.div`
    width: 400px;
    text-align: center;
    padding: 20px;
    @media(max-width: 600px){
        width: 92vw;
    }
    h2{
        padding: 10px 0;
    }
    p{
        margin: 20px 0;
        font-size: 20px;
    }
`

export const CloseButton = styled.button`
    cursor: pointer;
    border:none;
    backgroundColor:#fff;
    width: 25px;
    height: 25px;
    display: flex;
    background-color: inherit;
    
`
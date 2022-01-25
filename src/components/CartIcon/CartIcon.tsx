import { IconButton } from "@mui/material";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const CartIcon = styled(IconButton)`
    &:hover{
        background-color: rgba(0, 0, 0, .2);
    }
`

export const ShoppingCart = styled(ShoppingCartIcon)`
    color: white;
`

export const HeartIcon = styled(FavoriteIcon)`
    color: white;
`

export const CardHeartIcon = styled(IconButton)`
    &:hover{
        color: #A62014;
    }
`
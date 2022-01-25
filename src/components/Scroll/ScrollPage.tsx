import { useState } from "react"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton } from "@mui/material";
import styled from "styled-components";

const Scroll = styled(IconButton)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: #000;
`

export default function ScrollPage() {

    const [ pageYPosition, setPageYPosition ] = useState(0);

    function getPageYAfterScroll(){
        setPageYPosition(window.scrollY);
    }

    function upScreen() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.addEventListener('scroll', getPageYAfterScroll);

    return (
        <div>
            {pageYPosition > 900 &&
                <Scroll onClick={upScreen}>
                    <ArrowCircleUpIcon/>
                </Scroll>
            }
        </div>
    )
}
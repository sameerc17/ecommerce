import React from "react";
import styled from 'styled-components'
import {BsFillStarFill} from 'react-icons/bs'
const Rating=({stars,reviews})=>{
    return <Wrapper>
        <span>
            {stars} <BsFillStarFill className="icon"/> 
        </span>
       {` (based on ${reviews} reviews)`} </Wrapper>
}

const Wrapper=styled.div`
    margin: 2.5px 0;

    .icon{
        font-size:12px;
    }
    span{
        color:white;
        box-sizing: border-box;
        border-radius:5px;
        padding:1px 5px;
        background-color:#663300;
        margin-right:0.25rem;
      }
`

export default Rating
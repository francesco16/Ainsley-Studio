import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  padding: 0px 10px;
  display: flex;
  align-items: left;
  flex-direction: column;
  height: auto;
  width: 100%;
  border: none;
  z-index: 99;
  ${respondTo.S`
    top: 20vh;
  `}
  h1{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 10.5vw;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    ${respondTo.S`
    font-size: 9vw;
    `}
  }
  h2{
    max-width: 80vw;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 5.5vw;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    ${respondTo.S`
    font-size: 3.5vw;
    `}
  }
`;
export default function NavLinkBox(props) {
  return (
    <Wrapper justify={props.justify} backColor={props.backColor}>
      <h1>{props.title}</h1>
      

        <h2>{props.subTitle1} - {props.subTitle2}</h2>
        <h2>{props.subTitle3}</h2>
      
    </Wrapper>
  )
}


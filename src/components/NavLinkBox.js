import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const Wrapper = styled.button`
  background-color: transparent;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
  h1{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 10.5vw;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    ${respondTo.S`
    font-size: 5.5vw;
    `}
  }
`;


export default function NavLinkBox(props) {
  return (
    <Wrapper justify={props.justify} backColor={props.backColor}>
      <h1>{props.text}</h1>
    </Wrapper>
  )
}


import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const ButtonWrapper = styled.button`
  height: 40px;
  padding: 0px 20px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: black;   
  transition: 0.2S;
  display: flex;
  cursor: pointer;
  transition: 0.2S;
  border: none;
  ${respondTo.S`
      font-size: 1.5vw;
      height: 3vw;
    `}
  &:hover{
    color: white; 
    background-color: black;
  }
  &:focus{
    color: white; 
    background-color: black;
  }
  .content{
    width: 100%;
    text-align: center;
    font-family: 'Finger Paint', cursive;
    font-size: 20px;
    color: black;   
    transition: 0.2S;
    &:hover{
      color: white;   
    }
    ${respondTo.S`
      font-size: 2.5vw;
    `}

  }
`;
export default function Button({children}) {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  )
}


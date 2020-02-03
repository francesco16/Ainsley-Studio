import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const Input = styled.div`
  position: relative;
  margin-top: 20px;
  font-family: Nunito,sans-serif;
  font-weight: bold;
  input[type="text"]{
    font-size: 15px;
    display: inline-block;
    width: 70vw;
    height: 40px;
    box-sizing: border-box;
    outline: none;
    background-color: white;
    border: none;
    border-radius: 3px;
    padding: 10px 10px 10px 10px;
    transition: all 0.1s ease-out;
    color: #0E0E0E;
    ${respondTo.S`
      width: 500px;
      font-size: 18px;
    `}
    ${respondTo.M`
      height: 3vw;
      width: 40vw;
      border-radius: 0.3vw;
      font-size: 1.3vw;
      padding: 5px 10px 5px 10px;
    `}
    &::placeholder {
      color: #242422;
      opacity: 0.4
    }
  }
`;
export default function TextInput(props) {
  return (
    <Input>
      <input type="text" id={props.id} placeholder={props.placeholder} />
    </Input>
  )
}


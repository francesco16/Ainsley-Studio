import React from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const Wrapper = styled.div`
  padding: 0px 20px 0 0;
  height: auto;
  //min-height: 600px;
  width: auto;
  position: relative;
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: 100vw;
  grid-template-rows: 110px 110px 110px 110px 110px;
  grid-template-areas: 
    "portrait" 
    "architecture"
    "art" 
    "fashion"
    "products"
    "portfolio";
  ${respondTo.S`
    grid-template-columns: 25vw 18vw 25vw 25vw;
    grid-template-rows: 5vw 18vw 10vw 5vw;
    grid-template-areas: 
    "portrait art . products"
    "portrait art fashion products"
    "portrait architecture architecture products"
    ". architecture architecture products";
    padding: 0px 20px 20px 50vw;
  `}
  .portrait{
    grid-area: portrait;
    background-image: url(https://images.unsplash.com/photo-1554963984-67eb1b95f33f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
    background-position: 0 40%;
    background-size: cover;
    ${respondTo.S`
      background-position: 0 50%;
    `}
  }
  .architecture {
    grid-area: architecture;
    background-image: url(https://images.unsplash.com/photo-1564668314350-6b3653af7dfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1926&q=80);
    background-position: 0 50%;
    background-size: cover;
  }
  .art {
    grid-area: art;
    background-image: url(https://images.unsplash.com/photo-1549319114-362bceb08e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80);
    background-position: 0 80%;
    background-size: cover;
    ${respondTo.S`
      background-position: 0 50%;
    `}
  }
  .fashion{
    grid-area: fashion;
    background-image: url(https://images.unsplash.com/photo-1553463121-1141520a8106?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-position: 0 30%;
    background-size: cover;
    ${respondTo.S`
      background-position: 0 50%;
    `}
  }
  .products{
    grid-area: products;
    background-image: url(https://images.unsplash.com/photo-1563903530908-afdd155d057a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
    background-position: 0 60%;
    background-size: cover;
    ${respondTo.S`
      background-position: 0 50%;
    `}
  }
  .portfolio{
    grid-area: portfolio;
    background-image: url(https://images.unsplash.com/photo-1553463121-1141520a8106?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-position: 0 30%;
    background-size: cover;
    ${respondTo.S`
      background-position: 0 50%;
    `}
  }
  .overlayer{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
    cursor: pointer;
    &:hover{
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .title{
    position: absolute;
    color: white;
    margin-left: 5px;
  }
`;

export default function Services() {
  return (
    <Wrapper>
      <div className="portrait">
        <div className="overlayer" tabIndex="2">
          <h1 className="title">Portrait</h1>
        </div>
      </div>
      <div className="architecture">
        <div className="overlayer" tabIndex="2">
          <h1 className="title">Architecture</h1>
        </div>
      </div>
      <div className="art">
        <div className="overlayer" tabIndex="3">
          <h1 className="title">Art</h1>
        </div>
      </div>
      <div className="fashion">
        <div className="overlayer" tabIndex="4">
          <h1 className="title">Fashion</h1>
        </div>
      </div>
      <div className="products">
        <div className="overlayer" tabIndex="5">
          <h1 className="title">Products</h1>
        </div>
      </div>
      <div className="delivery"></div>
    </Wrapper>
  )
};


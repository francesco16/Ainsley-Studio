import React  from 'react';
import styled from 'styled-components';
import {respondTo} from './respondTo';

const Wrapper = styled.div`
  height: 500px;
  min-height: 500px;
  width: auto;
  display: flex;
  flex-direction: row;
  transition: 0.1s;
  padding-bottom: 20px;
`;
const Img = styled.img`
  height: 500px;
  min-height: 500px;
  width: auto;
  margin: 0 25px;
`;
const FImg = styled.img`
  height: 500px;
  min-height: 500px;
  width: auto;
  margin: 0 25px 0 0;
  ${respondTo.S`
  margin: 0 25px 0 0;
  `}
`;
const LImg = styled.img`
  height: 500px;
  min-height: 500px;
  width: auto;
  margin: 0 50px 0 25px;
  ${respondTo.S`
  margin: 0 50px 0 25px;
  `}
`;
export default () => {
  return (
    <Wrapper>
      <FImg src="https://images.unsplash.com/photo-1574338452491-25741493323e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="first" />
      <Img src="https://images.unsplash.com/photo-1573456097326-e88266f7c6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80" alt="first" />
      <Img src="https://images.unsplash.com/photo-1563902524-e2d4aeb2106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="first" />
      <Img src="https://images.unsplash.com/photo-1580442616539-99329979c610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="first" />
      <LImg src="https://images.unsplash.com/photo-1557180770-52f941329121?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="first" />
    </Wrapper>
  )
}


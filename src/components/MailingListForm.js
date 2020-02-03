import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;
export default function MailingListForm() {
  return (
    <Wrapper>
      <TextInput placeholder="Type your name here" label="Name" id="input1"/>
      <TextInput placeholder="Type your email here" label="Email" id="input2"/>
      <Button>Submit</Button>
    </Wrapper>
  )
}
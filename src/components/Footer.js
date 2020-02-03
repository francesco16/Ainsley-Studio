import React from 'react';
import styled from 'styled-components';
import MailingListForm from './MailingListForm';
import {respondTo} from './respondTo';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #242423;
  padding: 50px 0;
  ${respondTo.S`
    height: auto;
  `}
  .title{
    width: 70%;
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    ${respondTo.S`
      width: 100%;
    `}
    ${respondTo.M`
      font-size: 2.5vw;
    `}
  }
  .paragraph{
    text-align: center;
    width: 70%;
    color: white;
    font-family: Nunito,sans-serif;
    font-size: 13px;
    font-weight: 700;
    opacity: 0.3;
    ${respondTo.M`
      font-size: 1vw;
    `}
    .underline{
      text-decoration: underline;
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
const Spacer = styled.div`
  height: 3px;
  width: 70%;
  background-color: #d9d9cc;
  opacity: 0.3;
  margin: 50px 0 20px 0;
`;
export default function Footer() {
  return (
    <Wrapper>
        <h1 className="title">Join our mailing list!</h1>
        <p className="paragraph">If you'd like us to keep in touch with all of our latest offers, events and news, join our mailing list below. By signing up you agree to our <span className="underline">Privacy Policy</span> so pop over and have a look if you're unsure.</p>
          <MailingListForm/>
          <Spacer />
          <p className="paragraph">copyrighted by Francesco Anselmi, {new Date().getFullYear()}</p>
    </Wrapper>
  )
}
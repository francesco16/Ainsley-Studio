import React from "react";
import styled from 'styled-components';
import Home from './pages/Home'
import "./App.css";

const GlobalWrapper = styled.div`
  height: auto;
  width: 100vw;
  background: #0E0E0E;
  position: relative;
  overflow: hidden;
  
`;
export default () => {
  return (
    <GlobalWrapper >
      <Home/>
    </GlobalWrapper>
  );
};



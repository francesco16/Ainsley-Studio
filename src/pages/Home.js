import React, { useState, useRef } from "react";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import styled from 'styled-components';
import TitleTop from '../components/TitleTop';
import homeVideo from '../img/homeVideo.mp4';
import Footer from '../components/Footer';
import {respondTo} from '../components/respondTo';
import ParallaxHome from '../components/ParallaxHome';

const ParallaxWrapper = styled.div`
  background: #0E0E0E;
  height: 1600px;
  position: relative;
  transition: 0.1s;
  ${respondTo.S`
      height: 1450px;
  `}
  ${respondTo.SM`
      height: 1550px;
  `}
  ${respondTo.M`
      height: 1700px;
  `}
  ${respondTo.ML`
      height: 1970px;
  `}
  ${respondTo.L`
    height: 3620px;
  `}
`;
const VideoWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  video{
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    ${respondTo.S`
      width: 50VW
    `}
  }
  .overlayer{
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(14, 14, 14, 0.5);
    ${respondTo.S`
      width: 50VW
    `}
  }
`;
const BottomWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  bottom: 0;
  background-color: #2A2A2A;
`;
const Social = styled.div`
  width: 100vw;
  height: 70px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${respondTo.S`
    height: 4vw;
  `}
  button{
    border: none;
    background: transparent;
    width: auto;
    margin: 0 5vw;
  }
  .socialLogo{
    color: black;
    font-size: 40px;
    opacity: 0.7;
    cursor: pointer;
    ${respondTo.S`
    font-size: 2.5vw;
    `}
    &:hover{
      opacity: 1;
    }
    &:focus{
      opacity: 1;
    }
  }
`;
export default function() {
  const [ref1] = useState(useRef())
  return (
      <>
      <div ref={ref1}>
      <VideoWrapper>
        <video src={homeVideo} loop={true} autoPlay={true} playsInline muted plays-inline="true">
            Your browser does not support the video tag.
        </video> 
        <div className="overlayer"></div>
        <TitleTop title="ainsley studio" subTitle1="photographers" subTitle2="directors" subTitle3="digital content creators"/>
      </VideoWrapper>
      <ParallaxWrapper >
        <ParallaxHome reference={ref1}/>
      </ParallaxWrapper>
      <BottomWrapper>
        <Social>
          <button><FaFacebookF className="socialLogo"/></button>
          <button><FaInstagram className="socialLogo"/></button> 
          <button><FaTwitter className="socialLogo"/> </button>
          <button><FaYoutube className="socialLogo"/> </button>
        </Social>
        <Footer />
      </BottomWrapper>
      </div>
    </>
  );
};


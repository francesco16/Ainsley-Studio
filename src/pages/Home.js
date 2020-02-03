import React, { useEffect, useRef } from "react";
import { animated, useSpring, config } from "react-spring";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import styled from 'styled-components';
import TitleTop from '../components/TitleTop';
import homeVideo from '../img/homeVideo.mp4';
import Footer from '../components/Footer';
import scrollDownImg from '../img/scroll.png';
import ScrollImg from '../components/ScrollImg';
import Services from '../components/Services';
import {respondTo} from '../components/respondTo'

const GlobalWrapper = styled.div`
  background: #0E0E0E;
  height: calc(1500px + 100vh);
  position: relative;
  overflow: hidden;
  transition: 0.1s;
  ${respondTo.S`
      height: calc(1350px + 100vh);
  `}
  ${respondTo.M`
      height: calc(1670px + 100vh);
  `}
  ${respondTo.ML`
      height: calc(1970px + 100vh);
  `}
  ${respondTo.L`
    height: calc(3620px + 100vh);
  `}
`;
const ParallaxWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
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
`;
const VideoWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
const OurWorkImg = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 520px;
  min-height: 520px;
  overflow-x:scroll;
  overflow-y:hidden;
  -webkit-overflow-scrolling:scroll;
  top: calc(100vh + 20px);
  ${respondTo.S`
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:horizontal {
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 10px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track { 
        background-color: transparent; 
    }
  `}

`;
const Scroll = styled(animated.div)`
  width: auto;
  height: 500px;
  min-height: 500px;

`;
const ServicesWrapper = styled(animated.div)`
  position: absolute;
  width: auto;
  height: auto;
  top: calc(100vh + 600px);
  left: -45vw;
  //background-color: #191919;
  transition: 0.1s;
  ${respondTo.S`
    top: calc(100vh + 680px);
    left: -52vw;
  `}
`;
const BottomWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  bottom: 0;
  background-color: #2A2A2A;
`;
const ScrollDownImg = styled(animated.div)`
  position: absolute;
  top: -200px;
  left: 50vw;
  margin-left: -200px;
  width: 400px;
  height: 400px;
  background-image: url(${scrollDownImg});
  background-size: cover;

`;
const ScrollDownImgOverlayer = styled.div`
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100vw;
  height: 200vh;
  background-color: #0E0E0E;
  background-size: cover;
  border-top: 3px solid white;
  .Overlayer{
    width: 100vw;
    height: 100vh;
    background-color: #0E0E0E;
    position: relative;
    top: 0;
  }
`;
const Social = styled.div`
  width: 100vw;
  height: 20vw;
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
    margin: 0 10vw;
  }
  .socialLogo{
    color: black;
    font-size: 8vw;
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
export default () => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0, config: config.molasses }));
  const video = i => `translateY(${i * 0.08}px)`;
  const Rotate = i => `rotate(${i * 0.1}deg)`;
  const hScroll = i => `translateX(-${i * (window.innerWidth > 760 ? 0.05 : 0.2)}px)`;
  const vScroll = i => `translateY(${i * 0.05}px)`;
  const hScroll2 = i => `translate3d(${i * 0.02}px, ${i * 0.05}px, 0)`;
  const ref = useRef();
  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
      <>
      <GlobalWrapper ref={ref}>
        <ParallaxWrapper>
          <VideoWrapper
          style={{
            transform: offset.interpolate(video),
          }}
          >
          <video src={homeVideo} loop={true} autoPlay={true} playsInline muted plays-inline="true">
              Your browser does not support the video tag.
          </video> 
          <TitleTop title="ainsley studio" subTitle1="photographers" subTitle2="directors" subTitle3="digital content creators"/>
          </VideoWrapper>
  
          <ScrollDownImgOverlayer>
            <ScrollDownImg
            style={{
              transform: offset.interpolate(Rotate),
            }}
            />
            <div className="Overlayer"></div>
          </ScrollDownImgOverlayer>
  
          <OurWorkImg
          style={{
            transform: offset.interpolate(vScroll),
          }}
          >
            <Scroll 
            style={{
              transform: offset.interpolate(hScroll),
            }}
            >
              <ScrollImg/>
            </Scroll>
          </OurWorkImg>
  
          <ServicesWrapper 
            style={{
              transform: offset.interpolate(hScroll2),
            }}
          >
            <Services />
          </ServicesWrapper>
  
        </ParallaxWrapper>
      </GlobalWrapper>
      <BottomWrapper>
        <Social>
          <button><FaFacebookF className="socialLogo"/></button>
          <button><FaInstagram className="socialLogo"/></button> 
          <button><FaTwitter className="socialLogo"/> </button>
          <button><FaYoutube className="socialLogo"/> </button>
        </Social>
        <Footer />
      </BottomWrapper>
    </>
  );
};


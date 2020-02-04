import React, { useEffect, useRef } from "react";
import { animated, useSpring, config } from "react-spring";
import styled from 'styled-components';
import scrollDownImg from '../img/scroll.png';
import ScrollImg from '../components/ScrollImg';
import Services from '../components/Services';
import {respondTo} from '../components/respondTo'

const ParallaxWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 1500px;
`;
const OurWorkImg = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 520px;
  min-height: 520px;
  overflow-x:scroll;
  overflow-y:hidden;
  -webkit-overflow-scrolling:scroll;
  top: 50px;
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
  top: 630px;
  left: -45vw;
  //background-color: #191919;
  transition: 0.1s;
  ${respondTo.S`
    top: 710px;
    left: -52vw;
  `}
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
  top: 0;
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
export default () => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0, config: config.molasses }));
  const Rotate = i => `rotate(${i * 0.02}deg)`;
  const hScroll = i => `translateX(-${i * (window.innerWidth > 760 ? 0.1 : 0.2)}px)`;
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
        <ParallaxWrapper ref={ref}>
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
    </>
  );
};


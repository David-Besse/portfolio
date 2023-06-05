import Contact from "../Contact/Contact";
import MyProfile from "../MyProfile/MyProfile";
import MyWorks from "../MyWorks/MyWorks";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

import "./app.scss";
import MySkills from "../MySkills/MySkills";

const Section = styled.div`
  height: 100vh;
  background-color: #white;
  overflow-y: auto;
  scrollbar-width: none;
  display: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  background: white;
  background-size: cover;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: black;
  display: block;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  const titleRef = useRef();
  const spanRef = useRef();

  const onLoad = () => {
    // const titleLetters = Array.from(titleRef.current.children);
    // const titleSpan = spanRef.current;

    // gsap.set(titleLetters, { opacity: 0, x: -100 });

    // gsap
    //   .timeline({ delay: 0.4 })
    //   .fromTo(
    //     titleLetters,
    //     { opacity: 0, x: -100 },
    //     {
    //       opacity: 1,
    //       x: 0,
    //       stagger: 0.33,
    //       delay: 0.2,
    //       duration: 0.8,
    //       margin: "0 3vw",
    //     }
    //   )
    //   .to(".letter", {
    //     margin: "0 1vw",
    //     delay: 0.5,
    //     duration: 0.5,
    //   })
    //   .to(titleLetters, {
    //     x: -100,
    //     opacity: 0,
    //     stagger: 0.33,
    //     delay: 1.2,
    //     duration: 0.4,
    //   })
    //   .to("#titleContainer", {
    //     display: "none",
    //   })
    //   .to("#mainContainer", {
    //     display: "block",
    //   });

    // gsap
    //   .timeline({ delay: 0.5 })
    //   .fromTo(
    //     titleSpan,
    //     { opacity: 0 },
    //     { opacity: 1, stagger: 0.33, delay: 2.4, duration: 1.4 }
    //   )
    //   .to(titleSpan, {
    //     x: -100,
    //     opacity: 0,
    //     stagger: 0.33,
    //     delay: 2,
    //     duration: 1.2,
    //   });
  };

  // useEffect(() => {
  //   onLoad();
  // }, []);

  return (
    <>
      <Section
        id="titleContainer"
        className="titleContainer h-screen text-center flex flex-col justify-center items-center"
      >
        <h1
          className="title flex w-screen items-center justify-center font-normal"
          ref={titleRef}
        >
          <span className="letter inline-block">W</span>
          <span className="letter inline-block">E</span>
          <span className="letter inline-block">L</span>
          <span className="letter inline-block">C</span>
          <span className="letter inline-block">O</span>
          <span className="letter inline-block">M</span>
          <span className="letter inline-block">E</span>
        </h1>
        <span className="spanUnderTitle block" ref={spanRef}>
          to my portfolio
        </span>
      </Section>
      <Container
        id="mainContainer"
        className="mainContainer"
      >
        <Navbar />
        <Home />
        <MyProfile />
        <MyWorks />
        <MySkills />
        <Contact />
      </Container>
    </>
  );
};

export default App;

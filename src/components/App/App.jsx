import Contact from "../Contact/Contact";
import MyProfile from "../MyProfile/MyProfile";
import MyWorks from "../MyWorks/MyWorks";
import Home from "../Home/Home";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

import "./app.scss";

const Section = styled.div`
  height: 100vh;
  background-color: #3b5998;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  background-color: #3b5998;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  const titleRef = useRef();
  const spanRef = useRef();

  const onLoad = () => {
    const titleLetters = Array.from(titleRef.current.children);
    const titleSpan = spanRef.current;

    gsap.set(titleLetters, { opacity: 0, x: -100 });

    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        titleLetters,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, stagger: 0.33, delay: 0.2, duration: 1.2, margin: "0 2vw", }
      )
      .to(".letter", {
        delay: 0.2,
        duration: 0.5,
      })
      .to(".letter", {
        margin: "0",
        delay: 0.5,
        duration: 1,
      })
      .to(titleLetters, {
        x: -100,
        opacity: 0,
        stagger: 0.33,
        delay: 0.5,
        duration: 0.5,
      })
      .to("#titleContainer", {
        display: "none",
      })
      .to("#mainContainer", {
        display: "block",
      });

    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        titleSpan,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, stagger: 0.33, delay: 0.5, duration: 1.2 }
      )
      .to(titleSpan, {
        opacity: 1,
        y: -100,
        stagger: 0.33,
        delay: 3,
      })
      .to(titleSpan, {
        x: -100,
        opacity: 0,
        stagger: 0.33,
        delay: 2,
        duration: 1.2,
      });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <Section
        id="titleContainer"
        className="titleContainer h-screen text-center flex flex-col items-center"
      >
        <h1
          className="title flex h-screen w-screen items-center justify-center font-normal"
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
        style={{ display: "none" }}
      >
        <Home />
        <MyProfile />
        <MyWorks />
        <Contact />
      </Container>
    </>
  );
};

export default App;

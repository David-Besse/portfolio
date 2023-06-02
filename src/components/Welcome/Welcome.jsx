import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import "./welcome.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Section = styled.div`
  height: 100vh;
  background-color: #3b5998;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Welcome = () => {
  const titleRef = useRef();

  useEffect(() => {
    const titleLetters = Array.from(titleRef.current.children).reverse();

    gsap.set(titleLetters, { opacity: 0, x: -100 });

    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        titleLetters,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, stagger: 0.33, duration: 0.4 }
      )
      .to(".letter", {
        margin: "0 2vw",
        duration: 1,
      })
      .to(".letter", {
        margin: "0",
      })
      .to(".letter", {
        rotate: 360,
        delay: 0.5,
      })
      .to(titleLetters, { opacity: 0, x: 100, stagger: 0.33, duration: 0.7 })
      .to(".titleContainer", {
        y: "-100%",
        onComplete: () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      });
  }, []);

  return (
    <>
      <Section className="titleContainer h-screen text-center flex flex-col items-center">
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
      </Section>
    </>
  );
};

export default Welcome;

/* eslint-disable react-hooks/exhaustive-deps */
import Contact from "../Contact/Contact";
import AboutMe from "../AboutMe/AboutMe";
import MyWorks from "../MyWorks/MyWorks";
import MySkills from "../MySkills/MySkills";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./app.scss";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";

const splashTitleText = "DAVID BESSE";
const splashTitleLetters = splashTitleText.split("");
const spanOverTitleText = "Hey, I am";
const spanOverTitleLetters = spanOverTitleText.split("");
const spanUnderTitleText = "fullstack web developer.";
const spanUnderTitleLetters = spanUnderTitleText.split("");

const App = () => {
  const titleRef = useRef();
  const spanOverRef = useRef();
  const spanUnderRef = useRef();
  const { setCurrentSection } = useStore(useStoreApp);

  useEffect(() => {
    const title = Array.from(titleRef.current.children);
    const spanOver = Array.from(spanOverRef.current.children);
    const spanUnder = Array.from(spanUnderRef.current.children);

    // gsap
    //   .timeline({ delay: 0.4 })
    //   .fromTo(
    //     spanOver,
    //     { opacity: 0, x: -100 },
    //     { opacity: 1, x: 0, stagger: 0.1, duration: 0.1 }
    //   )
    //   .to(spanOver, {
    //     opacity: 0,
    //     delay: 6.3,
    //     duration: 1,
    //   });

    gsap
      // .timeline({ delay: 2 })
      // .fromTo(
      //   title,
      //   { opacity: 0, x: -100 },
      //   {
      //     opacity: 1,
      //     x: 0,
      //     stagger: 0.1,
      //     duration: 0.5,
      //     margin: "0 2.5vw",
      //   }
      // )
      // .to(".letterTitle", {
      //   margin: "0 1vw",
      //   duration: 0.2,
      // })
      .to(title, {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        // delay: 5,
        duration: 1,
        onComplete: () => {
          setCurrentSection("homePage");
          gsap.set("#titleContainer", { display: "none" });
          gsap.set("#mainContainer", { display: "block" });
        },
      });

    // gsap
    //   .timeline({ delay: 4 })
    //   .fromTo(
    //     spanUnder,
    //     { opacity: 0, x: -100 },
    //     { opacity: 1, x: 0, stagger: 0.1, duration: 0.1 }
    //   )
    //   .to(spanUnder, {
    //     opacity: 0,
    //     delay: 1.2,
    //     duration: 1,
    //   });
  }, []);

  return (
    <>
      <div
        id="titleContainer"
        className="titleContainer h-screen w-screen p-8 bg-white overflow-y-auto flex flex-col justify-center text-[#606887]"
      >
        <div
          className="spanOver text-start text-xl md:text-3xl lg:pl-14 xl:pl-28 2xl:pl-56"
          ref={spanOverRef}
        >
          {spanOverTitleLetters.map((letter, index) => (
            <span key={`spanOver_${index}_${letter}`} className="spanOverTitle">
              {letter}
            </span>
          ))}
        </div>
        <h1
          className="title w-full flex py-4 lg:py-8 xl:py-16 text-4xl md:text-6xl justify-center"
          ref={titleRef}
        >
          {splashTitleLetters.map((letter, index) => (
            <span
              key={`splashTitle_${index}_${letter}`}
              className="letterTitle  inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>
        <div
          className="spanUnder text-end text-xl md:text-3xl lg:pr-14 xl:pr-28 2xl:pr-56"
          ref={spanUnderRef}
        >
          {spanUnderTitleLetters.map((letter, index) => (
            <span
              key={`spanUnder_${index}_${letter}`}
              className="spanUnderTitle "
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div
        id="mainContainer"
        className="mainContainer h-screen overflow-y-auto text-[#606887] hidden"
      >
        <Navbar />
        <Home />
        <AboutMe />
        <MyWorks />
        <MySkills />
        <Contact />
      </div>
    </>
  );
};

export default App;

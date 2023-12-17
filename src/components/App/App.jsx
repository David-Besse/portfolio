/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";

import Contact from "./../Contact/Contact";
import AboutMe from "./../AboutMe/AboutMe";
import MyWorks from "../MyWorks/MyWorks";
import MySkills from "./../MySkills/MySkills";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

import "./app.scss";

const spanOverTitleLetters = Array.from("Hey, I am");
const splashTitleLetters = Array.from("DAVID BESSE");
const spanUnderTitleLetters = Array.from("fullstack web developer.");

const isFirefox = navigator.userAgent.includes("Firefox");
console.log("checking navigator:", navigator.userAgent);

const WarningMessage = () => (
  <div className="w-screen h-screen flex justify-center items-center text-4xl bg-[#f2f2f2]">
    <p className="text-center w-4/5">
      Sorry<span className="text-4xl">&#128517;</span>, Firefox is not
      supported.
      <br />
      You could experience some issues and break the world.
      <br />
      Please use Chrome.
    </p>
  </div>
);

const App = () => {
  const { setActiveSection, setTheme } = useStore(useStoreApp);
  const [showWarning, setShowWarning] = useState(isFirefox);

  const spanOverRef = useRef(null);
  const titleRef = useRef(null);
  const spanUnderRef = useRef(null);
  const mainContainerRef = useRef(null);

  const sectionRefs = {
    home: useRef(null),
    aboutMe: useRef(null),
    myWorks: useRef(null),
    mySkills: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    if (showWarning) {
      setTimeout(() => {
        setShowWarning(false);
      }, 10000);
    }

    return () => {
      setShowWarning(false);
    };
  }, [showWarning]);

  useEffect(() => {
    // Handles the scroll event and updates the active section based on the scroll position.
    const handleScroll = () => {
      Object.values(sectionRefs).forEach((ref) => {
        const { top, bottom } = ref.current.getBoundingClientRect();

        if (top >= 0 && bottom <= window.innerHeight) {
          setActiveSection(ref.current.id);
        }
      });
    };

    const mainContainer = mainContainerRef.current;
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mainContainerRef]);

  // introduction animation
  useEffect(() => {
    const spanOverRefElement = Array.from(spanOverRef.current.children);
    const titleRefElement = Array.from(titleRef.current.children);
    const spanUnderRefElement = Array.from(spanUnderRef.current.children);

    // animate splash elements over title elements
    gsap
      .timeline({ delay: 0.4 })
      .fromTo(
        spanOverRefElement,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.1 }
      )
      .to(spanOverRefElement, {
        opacity: 0,
        delay: 5.3,
        duration: 1,
      });

    // animate title elements
    gsap
      .timeline({ delay: 1.4 })
      .fromTo(
        titleRefElement,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.4,
          margin: "0 2.5vw",
        }
      )
      .to(".letterTitle", {
        margin: "0 1vw",
        duration: 0.2,
      })
      .to(titleRefElement, {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        delay: 3.5,
        duration: 0.5,
      })
      .to("#titleContainer", { opacity: 0, duration: 0.1, display: "none" })
      .to("#mainContainer", { opacity: 1, duration: 0.1, display: "block" })
      .call(() => {
        setActiveSection("homePage");
      });

    // animate splash elements under title elements
    gsap
      .timeline({ delay: 3 })
      .fromTo(
        spanUnderRefElement,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.1 }
      )
      .to(spanUnderRefElement, {
        opacity: 0,
        delay: 1,
        duration: 1,
      });
  }, []);

  // set theme
  useEffect(() => {
    if (localStorage.getItem("theme_portfolio") === "dark") {
      localStorage.setItem("theme_portfolio", "dark");
      setTheme("dark");
      document.documentElement.classList.toggle("dark");
    } else {
      localStorage.setItem("theme_portfolio", "light");
      setTheme("light");
      document.documentElement.classList.toggle("light");
    }
  }, []);

  return (
    <>
      {showWarning && <WarningMessage />}

      {/* Title Container */}
      <div
        id="titleContainer"
        className={`titleContainer ${
          showWarning ? "hidden" : ""
        } h-[100vh] w-[100vw] p-8 bg-[#f2f2f2] dark:bg-[#1e1e1e] flex flex-col justify-center text-[#4D4D4D] dark:text-[#f2f2f2] overflow-hidden`}
      >
        {/* Span over title */}
        <h2
          className="spanOverTitle text-start text-xl md:text-3xl lg:pl-14 xl:pl-28 2xl:pl-56"
          ref={spanOverRef}
        >
          {spanOverTitleLetters.map((letter, index) => (
            <span key={`spanOver_${index}_${letter}`} className="spanOverTitle">
              {letter}
            </span>
          ))}
        </h2>

        {/* Title */}
        <h1
          className="title w-full flex py-16 xl:py-32 text-4xl md:text-6xl justify-center"
          ref={titleRef}
        >
          {splashTitleLetters.map((letter, index) => (
            <span
              key={`splashTitle_${index}_${letter}`}
              className="letterTitle inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Span under title */}
        <h2
          className="spanUnderTitle text-end text-xl md:text-3xl lg:pr-14 xl:pr-28 2xl:pr-56"
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
        </h2>
      </div>

      {/* Main Container */}
      <div
        id="mainContainer"
        className={`mainContainer ${
          showWarning ? "hidden" : ""
        } opacity-0 h-[100vh] w-[100vw] relative text-[#4D4D4D] dark:text-[#f2f2f2] hidden bg-[#f2f2f2] dark:bg-[#1e1e1e]`}
        ref={mainContainerRef}
      >
        {/* Navbar */}
        <Navbar />

        {/* Home Page Section */}
        <section
          id="homePage"
          className="h-[100vh] w-[100vw] snap-center flex flex-col"
          ref={sectionRefs.home}
        >
          <Home />
        </section>

        {/* About Me Section */}
        <section
          id="aboutMe"
          className="relative h-[100vh] w-[100vw] snap-center pb-16 flex overflow-hidden"
          ref={sectionRefs.aboutMe}
        >
          <AboutMe />
        </section>

        {/* My Works Section */}
        <section
          id="myWorks"
          className="relative h-[100vh] w-[100vw] snap-center pb-16 pt-2 flex flex-col overflow-hidden"
          ref={sectionRefs.myWorks}
        >
          <MyWorks />
        </section>

        {/* My Skills Section */}
        <section
          id="mySkills"
          className="relative h-[100vh] w-[100vw] snap-center pb-16 flex justify-center items-center overflow-hidden"
          ref={sectionRefs.mySkills}
        >
          <MySkills />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative h-[100vh] w-[100vw] snap-center flex flex-col pb-16"
          ref={sectionRefs.contact}
        >
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;

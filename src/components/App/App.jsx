/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";

const Contact = lazy(() => import("./../Contact/Contact"));
import AboutMe from "./../AboutMe/AboutMe";
import MyWorks from "../MyWorks/MyWorks";
import MySkills from "./../MySkills/MySkills";

import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

import "./app.scss";

const splashTitleText = "DAVID BESSE";
const splashTitleLetters = splashTitleText.split("");
const spanOverTitleText = "Hey, I am";
const spanOverTitleLetters = spanOverTitleText.split("");
const spanUnderTitleText = "fullstack web developer.";
const spanUnderTitleLetters = spanUnderTitleText.split("");

const App = () => {
  const { setActiveSection } = useStore(useStoreApp);

  const titleRef = useRef(null);
  const spanOverRef = useRef(null);
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
    /**
     * Handles the scroll event and updates the active section based on the scroll position.
     *
     * @param {none} none - This function does not take any parameters.
     * @return {none} This function does not return anything.
     */
    const handleScroll = () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          const isFullyInView = top >= 0 && bottom <= window.innerHeight;

          if (isFullyInView) {
            const sectionId = ref.current.id;
            setActiveSection(sectionId);
          }
        }
      });
    };

    if (mainContainerRef.current) {
      mainContainerRef.current.addEventListener("scroll", handleScroll, {passive: true});
    }

    return () => {
      if (mainContainerRef.current) {
        mainContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mainContainerRef]);

  useEffect(() => {
    const titleRefElement = Array.from(titleRef.current.children);
    // const spanOverRefElement = Array.from(spanOverRef.current.children);
    // const spanUnderRefElement = Array.from(spanUnderRef.current.children);

    // gsap
    //   .timeline({ delay: 0.4 })
    //   .fromTo(
    //     spanOverRefElement,
    //     { opacity: 0, x: -100 },
    //     { opacity: 1, x: 0, stagger: 0.1, duration: 0.1 }
    //   )
    //   .to(spanOverRefElement, {
    //     opacity: 0,
    //     delay: 6.3,
    //     duration: 1,
    //   });

    gsap
      // .timeline({ delay: 2 })
      // .fromTo(
      //   titleRefElement,
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
      .to(titleRefElement, {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        // delay: 5,
        duration: 1,
        onComplete: () => {
          gsap.set("#titleContainer", { display: "none" });
          gsap.set("#mainContainer", { display: "block" });
          setActiveSection("homePage");
        },
      });

    // gsap
    //   .timeline({ delay: 4 })
    //   .fromTo(
    //     spanUnderRefElement,
    //     { opacity: 0, x: -100 },
    //     { opacity: 1, x: 0, stagger: 0.1, duration: 0.1 }
    //   )
    //   .to(spanUnderRefElement, {
    //     opacity: 0,
    //     delay: 1.2,
    //     duration: 1,
    //   });
  }, []);

  return (
    <>
      {/* titleRef Container */}
      <div
        id="titleContainer"
        className="titleContainer h-screen w-screen p-8 bg-[#f2f2f2] flex flex-col justify-center text-[#606887]"
      >
        {/* Span Over titleRef */}
        <div
          className="spanOverTitle text-start text-xl md:text-3xl lg:pl-14 xl:pl-28 2xl:pl-56"
          ref={spanOverRef}
        >
          {spanOverTitleLetters.map((letter, index) => (
            <span key={`spanOver_${index}_${letter}`} className="spanOverTitle">
              {letter}
            </span>
          ))}
        </div>
        {/* Main titleRef */}
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
        {/* Span Under titleRef */}
        <div
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
        </div>
      </div>

      {/* Main Container */}
      <div
        id="mainContainer"
        className="mainContainer relative h-screen w-screen text-[#606887] hidden bg-[#f2f2f2]"
        ref={mainContainerRef}
      >
        {/* Navbar */}
        <Navbar />

        {/* Home Page Section */}
        <section
          id="homePage"
          className="h-screen w-screen flex flex-col snap-center"
          ref={sectionRefs.home}
        >
          <Home />
        </section>

        {/* About Me Section */}
        <section
          id="aboutMe"
          className="relative flex h-screen w-screen snap-center"
          ref={sectionRefs.aboutMe}
        >
          <AboutMe />
        </section>

        {/* My Works Section */}
        <section
          id="myWorks"
          className="relative h-screen w-screen snap-center py-16 flex flex-col"
          ref={sectionRefs.myWorks}
        >
          <MyWorks />
        </section>

        {/* My Skills Section */}
        <section
          id="mySkills"
          className="relative h-screen w-screen snap-center"
          ref={sectionRefs.mySkills}
        >
          <MySkills />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative h-screen w-screen bg-[white] snap-center flex flex-col"
          ref={sectionRefs.contact}
        >
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;

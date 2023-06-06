/* eslint-disable react-hooks/exhaustive-deps */
import Contact from "../Contact/Contact";
import MyProfile from "../MyProfile/MyProfile";
import MyWorks from "../MyWorks/MyWorks";
import MySkills from "../MySkills/MySkills";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./app.scss";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";

const App = () => {
  const titleRef = useRef();
  const spanRef = useRef();
  const { setSelectedSection } = useStore(useStoreApp);

  useEffect(() => {
    const titleLetters = Array.from(titleRef.current.children);
    const titleSpan = spanRef.current;

    gsap.set(titleLetters, { opacity: 0, x: -100 });

    gsap
      .timeline({ delay: 0.4 })
      .fromTo(
        titleLetters,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.33,
          delay: 0.2,
          duration: 0.8,
          margin: "0 3vw",
        }
      )
      .to(".letter", {
        margin: "0 1vw",
        delay: 0.5,
        duration: 0.5,
      })
      .to(titleLetters, {
        x: -100,
        opacity: 0,
        stagger: 0.33,
        delay: 1.2,
        duration: 0.4,
        onComplete: () => {
          setSelectedSection("homePage");
          gsap.set("#titleContainer", { display: "none" });
          gsap.set("#mainContainer", { display: "block" });
        },
      });

    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        titleSpan,
        { opacity: 0 },
        { opacity: 1, stagger: 0.33, delay: 2.4, duration: 1.4 }
      )
      .to(titleSpan, {
        x: -100,
        opacity: 0,
        stagger: 0.33,
        delay: 2,
        duration: 1.2,
      });
  },[]);

  return (
    <>
      <div
        id="titleContainer"
        className="titleContainer h-screen w-screen bg-white overflow-y-auto scrollba text-center flex flex-col justify-center items-center"
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
      </div>
      <div
        id="mainContainer"
        className="mainContainer h-screen overflow-y-auto text-black hidden"
      >
        <Navbar />
        <Home />
        <MyProfile />
        <MyWorks />
        <MySkills />
        <Contact />
      </div>
    </>
  );
};

export default App;

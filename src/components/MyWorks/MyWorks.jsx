/* eslint-disable react/no-unknown-property */
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import styled from "styled-components";
import "./myWorks.scss";
import { useRef, useState } from "react";
import gsap from "gsap";

const projects = ["Art@home", "portfolio"];

const MyWorks = () => {
  const { setCurrentSection } = useStore(useStoreApp);
  const [projectSelected, setProjectSelected] = useState("");
  const tvRef = useRef();

  const handleWaypointEnter = () => {
    setCurrentSection("myWorks");
  };

  const ListItem = styled.li`
    -webkit-text-stroke: 1px black;

    &::after {
      content: "${({ text }) => text}";
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(20deg, pink, #00a1ec);
      backgroundClip: text;
      -webkit-background-clip: text;
      color: transparent;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
    }

    &.clicked {
      &::after {
        animation: moveText 0.3s linear both;
      }
    }
    
    @keyframes moveText {
      from {
        width: 0;
      }
    
      to {
        width: 100%;
      }
    }
  `;

  const handleProjectInformation = (event) => {
    const element = event.currentTarget;

    setProjectSelected(element.textContent);

    gsap.timeline({ delay: 0.2 }).fromTo(
      tvRef.current,
      { display: "none", opacity: 0 },
      {
        display: "flex",
        opacity: 1,
        duration: 0.8,
        ease: "ease-in-out",
      }
    );
  };

  return (
    <div
      id="myWorks"
      className="myWorks relative h-screen snap-center bg-[#f3f2f9]"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <h2 className="absolute top-2 left-2 h-[5%] text-2xl font-bold">
        .myWorks
      </h2>
      <div className="h-full w-full sm:flex">
        <ul className="w-full h-1/5 flex justify-start items-start pt-14 pl-2 text-4xl sm:flex-col sm:pb-16 sm:w-1/4 sm:h-full lg:text-5xl xl:text-6xl">
          {projects.map((item) => (
            <ListItem
              className={`relative w-fit h-fit ml-2 mr-2 mb-4 cursor-pointer text-transparent ${projectSelected === item ? 'clicked' : 'normal'}`}
              key={item}
              text={item}
              onClick={(event) => handleProjectInformation(event)}
            >
              {item}
            </ListItem>
          ))}
        </ul>
        <div
          className="w-full h-4/5 sm:w-3/4 sm:h-full hidden justify-center sm:pt-14 pb-16 items-start sm:items-center"
          ref={tvRef}
        >
          {projectSelected === projects[0] && (
            <iframe
              title="Projet Art@home"
              src="https://www.webshappers.com"
              className="w-[90%] h-[95%] sm:h-[80%] border-8 rounded shadow-2xl"
            />
          )}
          {projectSelected === projects[1] && (
            <div className="flex w-[90%] h-[95%] sm:h-[80%] text-4xl bg-transparent rounded shadow-2xl justify-center items-center">
              Maintenance
            </div>
          )}
          {projectSelected === "" && (
            <div className="w-[90%] h-[95%] sm:h-[80%] bg-black rounded shadow-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;


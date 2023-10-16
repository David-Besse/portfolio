/* eslint-disable react/no-unknown-property */
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useState } from "react";
import styled from "styled-components";

import "./aboutMe.scss";

import WordList from "../../datas/WordList";
import Scene from "./Scene/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";

const ListItem = styled.li`
  -webkit-text-stroke: 1px black;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #00a1ec;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.6s ease;
  }

  &:hover {
    ::after {
      width: 100%;
      transition: width 0.6s ease;
    }
  }
`;

const AboutMe = () => {
  const { setCurrentSection } = useStore(useStoreApp);
  const [wordHovered, setWordHovered] = useState("");
  const [hovered, setIsHovered] = useState(false);

  const words = Object.keys(WordList);

  const handleWaypointEnter = () => {
    setCurrentSection("aboutMe");
  };

  return (
    <section
      id="aboutMe"
      className="aboutMe relative h-screen w-screen snap-center bg-[#f0f0f0]"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <div
        id="aboutMe_scene"
        className="w-full h-full absolute top-0 left-0 z-5"
      >
        <Canvas>
          <Sky />
          <ambientLight intensity={2} />
          <Scene />
          <OrbitControls />
          <axesHelper />
        </Canvas>
      </div>
      <h2 className="absolute top-6 left-6 title_list h-[5%] text-2xl font-bold z-10">
        .aboutMe
      </h2>
      <div className="absolute top-0 left-0 flex flex-col h-full lg:flex-row p-4 z-10">
        <ul className="flex flex-col w-full h-1/2 mb-8 mt-8 justify-around lg:w-1/3 lg:h-full lg:justify-around lg:mt-0 lg:mb-0 xl:w-1/4 word_list">
          {words.map((word) => (
            <ListItem
              className={`relative flex items-center text-4xl text-transparent lg:text-6xl lg:align-top cursor-pointer ${
                hovered ? "opacity-100" : ""
              }`}
              key={word}
              text={word}
              onMouseEnter={() => {
                setWordHovered(word);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setWordHovered("");
                setIsHovered(false);
              }}
            >
              {word}
            </ListItem>
          ))}
        </ul>
      </div>
      <div className="absolute top-10 left-0 right-0 resumeBox w-full h-1/2 lg:w-2/3 lg:h-auto xl:w-3/4 flex items-center justify-center">
        {wordHovered !== "" && (
          <div className="flex justify-center z-20">
            <div className="arrow content-none"></div>
            <p
              className={`w-auto h-fit p-4 text-2xl text-center border rounded-3xl border-solid border-transparent bg-white`}
            >
              {WordList[wordHovered]}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;

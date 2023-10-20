/* eslint-disable react/no-unknown-property */
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useState } from "react";
import styled from "styled-components";

import "./aboutMe.scss";

import WordList from "../../datas/WordList";
import { Canvas } from "@react-three/fiber";
import { Gltf, Sky, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Scene/Avatar/Avatar";

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
      className="aboutMe relative h-screen w-screen snap-center"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <div
        id="aboutMe_scene"
        className="w-full h-full absolute top-0 left-0 z-5"
      >
        <Canvas shadows>
          <PerspectiveCamera
            makeDefault
            aspect={4 / 3}
            position={[4, 0, -2]}
            rotation={[0, 0, 0]}
          />
          <ambientLight intensity={1} />
          <Sky />
          <Avatar />
          <Gltf
            receiveShadow
            castShadow
            src="new_room_window_side.glb"
            scale={0.128}
            position={[-0.11, -1, 0]}
            rotation={[0, -Math.PI, 0]}
          />
          <OrbitControls />
        </Canvas>
      </div>
      <h2 className="absolute top-6 left-6 title_list h-[5%] text-2xl font-bold z-10">
        .aboutMe
      </h2>
      <div className="absolute top-[10%] left-0 h-[] w-fit md:h-full md:top-0 lg:flex-row p-2 z-10">
        <ul className="word_list flex flex-col justify-around h-full lg:w-full lg:h-4/5 lg:justify-around lg:mt-0 lg:mb-0">
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
      <div className="resumeBox absolute bottom-[10%] right-0 w-full md:w-1/2 h-fit flex items-center justify-end">
        {wordHovered !== "" && (
          <div className="flex justify-center z-10">
            <p className={"w-auto h-fit p-2 text-2xl text-center text-white"}>
              {WordList[wordHovered]}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;

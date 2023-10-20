/* eslint-disable react/no-unknown-property */
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useState, Suspense } from "react";
import styled from "styled-components";

import "./aboutMe.scss";

import WordList from "../../datas/WordList";
import { Canvas } from "@react-three/fiber";
import {
  Gltf,
  Sky,
  PerspectiveCamera,
  OrbitControls,
  Text3D,
  Html,
  useProgress,
} from "@react-three/drei";
import { Avatar } from "./Scene/Avatar/Avatar";

import wordFont from "../../assets/fonts/Baloo Thambi 2 Medium_Regular.json";

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

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>café en cours {Math.round(progress * 100) / 100} % terminée</Html>;
};

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
            position={[-3, 0.5, -5]}
            fov={60}
          />
          <ambientLight intensity={1} />
          <Sky />
          <Suspense fallback={<Loader />}>
            <Avatar />
            <Gltf
              receiveShadow
              castShadow
              src="new_room_window_side.glb"
              scale={0.128}
              position={[-0.11, -1, 0]}
              rotation={[0, -Math.PI, 0]}
            />
            {words.map((item, index) => (
              <Text3D
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.1}
                lineHeight={0.5}
                letterSpacing={0.1}
                size={0.2}
                font={wordFont}
                position={[2.5, 1.2 + index / -3, -1.5]}
                rotation={[0, -Math.PI / 2, 0]}
                key={item}
                onPointerEnter={() => {
                  setWordHovered(item);
                  setIsHovered(true);
                }}
                onPointerLeave={() => {
                  setWordHovered("");
                  setIsHovered(false);
                }}
              >
                {item}
                <meshNormalMaterial />
              </Text3D>
            ))}
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      <h2 className="absolute top-6 left-6 title_list h-[5%] text-2xl font-bold z-10">
        .aboutMe
      </h2>
      <div className="absolute hidden top-[10%] left-0 h-1/2 md:h-4/5 w-fit lg:flex-row p-2 z-10">
        <ul className="word_list flex flex-col justify-around h-full">
          {words.map((word) => (
            <ListItem
              className={`relative flex items-center text-4xl text-transparent lg:text-5xl lg:align-top cursor-pointer ${
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

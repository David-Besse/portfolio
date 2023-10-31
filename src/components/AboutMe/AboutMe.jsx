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
  Sky,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  Gltf,
  Text3D,
  Environment,
  ContactShadows,
  useCursor,
} from "@react-three/drei";
import { Avatar } from "./Scene/Avatar/Avatar";

import wordFont from "../../assets/fonts/Baloo Thambi 2_Regular.json";

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
  return (
    <Html center>
      Computer startup... {Math.round(progress * 100) / 100} % finished
    </Html>
  );
};

const AboutMe = () => {
  const { setCurrentSection } = useStore(useStoreApp);
  const [wordHovered, setWordHovered] = useState("");
  const [hovered, setIsHovered] = useState(false);
  const [cameraActivated, setCameraActivated] = useState(false);

  useCursor(hovered);

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
          <OrbitControls enabled={cameraActivated} />
          <PerspectiveCamera makeDefault position={[-5, -1, -10]} fov={70} />
          <Sky sunPosition={[10, 12, -20]} />
          <Environment preset="sunset" />
          <Suspense fallback={<Loader />}>
            <group>
              <ContactShadows
                opacity={0.8}
                scale={12}
                blur={1}
                far={10}
                resolution={256}
                color="#000000"
                position={[0, -5.001, 0]}
              />
              <Avatar />
              <Gltf
                receiveShadow
                castShadow
                src="desktop_chair.glb"
                scale={0.5}
                position={[-0.35, -5, 0]}
                rotation={[0, Math.PI, 0]}
              />
              {words.map((item, index) => (
                <Text3D
                  curveSegments={32}
                  bevelEnabled
                  bevelSize={0.1}
                  bevelThickness={0.1}
                  height={0.05}
                  lineHeight={0.5}
                  letterSpacing={0.1}
                  size={1}
                  font={wordFont}
                  position={[5, 0 + index + 3, 0]}
                  rotation={[0, 180, 0]}
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
              <mesh position-y={-5.001} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial transparent opacity={0} />
              </mesh>
            </group>
          </Suspense>
        </Canvas>
      </div>
      <h2 className="absolute top-6 left-6 title_list h-[5%] text-2xl font-bold z-10">
        .aboutMe
      </h2>
      <div
        className="absolute text-center text-sm text-gray-500 z-10 bottom-24 right-0 left-0 cursor-help hover:text-lg hover:underline hover:decoration-2"
        onClick={() => setCameraActivated(!cameraActivated)}
      >
        {cameraActivated
          ? "Clique ici pour désactiver la caméra (et permettre le défilement de la page)"
          : "Clique ici pour activer la caméra (le défilement de la page sera temporairement bloqué)"}
      </div>
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

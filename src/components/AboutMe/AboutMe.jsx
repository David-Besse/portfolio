/* eslint-disable react/no-unknown-property */
import { useState, Suspense } from "react";
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import {
  Sky,
  OrbitControls,
  Html,
  useProgress,
  Gltf,
  Text3D,
  Environment,
  ContactShadows,
  useCursor,
} from "@react-three/drei";
import * as THREE from 'three';

import { Avatar } from "./Scene/Avatar/Avatar";

import WordList from "../../datas/WordList";

import "./aboutMe.scss";
import { HiInformationCircle } from "react-icons/hi";
import wordFont from "../../assets/fonts/Baloo Thambi 2 SemiBold_Regular.json";

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
        <Canvas
          camera={{ position: [-15, 10, -15], fov: 70, target: new THREE.Vector3(5, 6, 0) }}
        >
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
                  height={1}
                  letterSpacing={0.01}
                  size={3}
                  font={wordFont}
                  position={[10, 1 + index * 4, -2]}
                  rotation={[0, 180.3, 0]}
                  key={item}
                >
                  {item}
                  <meshNormalMaterial />
                </Text3D>
              ))}
              <mesh position-y={-5.001} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial transparent opacity={0} />
              </mesh>
            </group>
          </Suspense>
          <OrbitControls enabled={cameraActivated} />
        </Canvas>
      </div>

      <h2 className="absolute top-2 left-2 title_list h-[5%] text-2xl font-bold z-10">
        .aboutMe
      </h2>

      <div
        className="absolute text-center z-10 top-3.5 right-2"
        onClick={() => setCameraActivated(!cameraActivated)}
      >
        {cameraActivated ? (
          <p className="inline-block text-md text-gray-500 cursor-pointer">
            désactiver la caméra
          </p>
        ) : (
          <p className="inline-block text-md text-gray-500 cursor-pointer">
            activer la caméra
          </p>
        )}
        <div className="inline-block relative ml-2 group">
          <HiInformationCircle className="cursor-pointer text-blue-500" />
          <div>
            <div className="hidden absolute w-52 right-0 top-4 bg-gray-200 p-2 rounded-lg text-sm shadow-md mt-2 z-20 group-hover:block">
              Activer la caméra va désactiver le défilement de la page afin de
              permettre le zoom dans la scène 3D, si vous souhaitez changer de
              page, veuillez désactiver la caméra ou cliquer sur une autre icône
              de la barre de navigation (sur ce point, cela conservera la
              caméra).
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute text-center z-10 top-96 right-2"
        onClick={() => cameraControlsRef.current?.reset(true)}
      >
        <p className="inline-block text-md text-gray-500 cursor-pointer">
          Réinitialiser la caméra
        </p>
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

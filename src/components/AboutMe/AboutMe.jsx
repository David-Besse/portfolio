/* eslint-disable react/no-unknown-property */
import { useState, Suspense, useRef } from "react";
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Gltf,
  Environment,
  ContactShadows,
  useCursor,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { HiInformationCircle } from "react-icons/hi";
import BackgroundStars from "./Scene/BackgroundStars/BackgroundStars";
import Avatar from "./Scene/Avatar/Avatar";
import WordList from "../../datas/WordList";
import "./aboutMe.scss";
import Loader from "./Scene/Loader/Loader";

// custom <li> component
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
  const [cameraActivated, setCameraActivated] = useState(false);
  const camRef = useRef();

  // activate hover in 3d scene
  useCursor(hovered);

  const resetCameraPosition = () => {
    camRef.current.position.set(20, 2, -20);
    camRef.current.lookAt(8, 5, 0);
  };

  const handleWaypointEnter = () => {
    setCurrentSection("aboutMe");
  };

  return (
    <section
      id="aboutMe"
      className="relative flex h-screen w-screen bg-[#f3f2f9]"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="50%" />

      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl font-bold z-10">
        .aboutMe
      </h2>

      {/* decoration */}
      <div
        id="aboutMe_scene"
        className="absolute top-0 left-0 w-full h-full"
      ></div>

      {/* left side */}
      <div className="relative w-1/2 h-full">
        <div className="absolute w-full h-3/5 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Canvas className="rounded-e-full">
            <PerspectiveCamera
              ref={camRef}
              makeDefault
              position={[20, 2, -20]}
              fov={70}
            />
            <color attach={"background"} args={["#111"]} />
            <Environment preset="city" />
            <BackgroundStars
              radius={200}
              depth={10}
              count={2500}
              factor={7}
              saturation={0.7}
              fade={true}
            />
            <Suspense fallback={<Loader />}>
              <group scale={1}>
                <ContactShadows
                  opacity={0.8}
                  scale={30}
                  blur={1}
                  far={10}
                  resolution={256}
                  color="#000000"
                  position={[0, -5, 0]}
                />
                <Avatar scaling={7.9} />
                <Gltf
                  receiveShadow
                  castShadow
                  src="desktop_chair.glb"
                  scale={1}
                  position={[-0.35, -5, 0]}
                  rotation={[0, Math.PI, 0]}
                />
              </group>
            </Suspense>
            <mesh position-y={-5.001} rotation-x={-Math.PI / 2}>
              <circleGeometry args={[25, 64, 10]} />
              <meshStandardMaterial color={"white"} side={THREE.DoubleSide} />
            </mesh>
            <OrbitControls
              enabled
              camera={camRef.current}
              enablePan={cameraActivated}
              enableRotate={cameraActivated}
              enableZoom={cameraActivated}
              target={[5, 0, 0]}
            />
          </Canvas>
        </div>
      </div>

      {/* right side */}
      <div className="relative w-1/2 h-full p-2 flex flex-col justify-around">
        <h3 className="text-4xl sm:text-5xl lg:text-[5em] uppercase absolute top-[4%] self-start">
          what defines me
        </h3>
        <ul className="relative flex flex-col items-end">
          {WordList.map((word) => (
            <ListItem
              className={`relative text-3xl sm:text-4xl text-transparent lg:text-[3em] mt-2 lg:mb-4 cursor-pointer ${
                hovered ? "opacity-100" : ""
              }`}
              key={word.keyword}
              text={word.keyword}
              onMouseEnter={() => {
                setWordHovered(word.keyword);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setWordHovered("");
                setIsHovered(false);
              }}
            >
              {word.keyword}
            </ListItem>
          ))}
        </ul>
        <div className="quoteBox absolute w-1/2 top-1/2 transform -translate-y-1/2 left-0">
          {wordHovered !== "" && (
            <div className="flex justify-center">
              <p className={"w-auto h-fit p-2 text-4xl text-center text-black"}>
                {WordList.find((el) => el.keyword === wordHovered).quote}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* handle camera for user */}
      <div
        className="absolute text-center bottom-28 left-0 right-0"
        onClick={() => {
          setCameraActivated(!cameraActivated);
          resetCameraPosition();
        }}
      >
        <p className="inline-block text-sm lg:text-lg text-white tracking-normal cursor-pointer">
          {cameraActivated ? " désactiver la caméra" : "activer la caméra"}
        </p>
        <div className="inline-block relative ml-2 group">
          <HiInformationCircle className="cursor-pointer text-white" />
          <div>
            <div className="hidden absolute w-80 -right-20 bottom-6 bg-gray-200 p-2 rounded-lg text-sm shadow-md mt-2 z-20 group-hover:block">
              Le défilement de la page sera temporairement désactivé dans la scène 3D.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

/* eslint-disable react/no-unknown-property */
import { useState, Suspense, useRef } from "react";
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
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";
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
    white-space: nowrap;
    transition: width 0.6s ease;
  }

  &:hover::after {
      width: 100%;
    }
  }
`;

const AboutMe = () => {
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

  // handle camera
  const handleCam = () => {
    setCameraActivated(!cameraActivated);
    resetCameraPosition();
  };

  return (
    <div
      id="aboutMe"
      className="relative flex h-screen w-screen bg-[#f3f2f9] snap-center"
    >
      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl font-bold z-10">
        .aboutMe
      </h2>
      <h3 className="absolute top-0 left-0 h-1/5 w-full text-4xl flex uppercase justify-end items-center pr-2 sm:pr-6 sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
        what defines me
      </h3>

      {/* left side */}
      <div className="relative w-1/2 h-full">
        {/* 3d scene */}
        <div className="absolute w-full h-3/5 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Canvas className="rounded-e-full shadow-2xl">
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
            <mesh position-y={-5.02} rotation-x={-Math.PI / 2}>
              <circleGeometry args={[25, 64]} />
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
          {/* handle camera for user */}
          <div className="absolute flex justify-center items-center left-1/2 transform -translate-x-1/2">
            <div className="flex justify-center items-center mr-2">
              {!cameraActivated && (
                <BsFillCameraVideoFill
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => handleCam()}
                />
              )}
              {cameraActivated && (
                <BsFillCameraVideoOffFill
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => handleCam()}
                />
              )}
            </div>
            <div className="group flex justify-center items-center">
              <HiInformationCircle className="w-6 h-6 inline-block cursor-help text-[#00a1ec]" />
              <div>
                <div className="hidden absolute left-10 bottom-8 bg-gray-200 p-2 rounded-lg text-sm shadow-md mt-2 text-center z-20 group-hover:block">
                  On / Off
                  <br />
                  <br />
                  Le défilement de la page sera temporairement désactivé dans la
                  scène 3D.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="relative w-1/2 h-full flex flex-col ps-2 pe-2 justify-around">
        <div className="pt-6 sm:pr-6 flex flex-col">
          <ul className="flex flex-col text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-transparent items-end">
            {WordList.map((word) => (
              <ListItem
                className={`relative cursor-pointer pb-4 ${
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
          <div className="quoteBox flex justify-center items-center">
            <p
              className={
                "relative font-bold p-2 text-xl bg-slate-50 rounded-3xl text-center text-black"
              }
            >
              <BiSolidQuoteRight className="absolute left-0 -top-6 w-6 h-6" />
              {wordHovered !== "" &&
                WordList.find((el) => el.keyword === wordHovered).quote}
              <BiSolidQuoteRight className="absolute right-0 -bottom-6 w-6 h-6" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

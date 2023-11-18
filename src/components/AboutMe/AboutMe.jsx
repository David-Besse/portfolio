/* eslint-disable react/no-unknown-property */
import { useState, Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Gltf,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import styled from "styled-components";

import { HiInformationCircle } from "react-icons/hi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";

import BackgroundStars from "./Scene/BackgroundStars/BackgroundStars";
import Avatar from "./Scene/Avatar/Avatar";
import WordList from "../../datas/WordList";
import Loader from "./Scene/Loader/Loader";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";

import "./aboutMe.scss";

// Define a styled list item component
const ListItem = styled.li`
  -webkit-text-stroke: 1.7px #606887;
  color: white;
  position: relative;
  cursor: pointer;

  // Add a pseudo-element after the list item
  &::after {
    content: "${(props) => props.text}"; // Display the value of the "text" prop
    position: absolute;
    color: #ad8b75ff;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  // Apply styles on hover
  &:hover {
    ::after {
      animation: moveText 0.3s linear both;
    }
  }

  // Define an animation for the pseudo-element
  @keyframes moveText {
    to {
      width: 100%;
    }
  }
`;

/**
 * Renders the About Me component.
 *
 * @return {JSX.Element} The rendered About Me component.
 */
const AboutMe = () => {
  const [wordHovered, setWordHovered] = useState("");
  const [cameraActivated, setCameraActivated] = useState(false);
  const camRef = useRef();

  /**
   * Resets the camera position.
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  const resetCameraPosition = () => {
    camRef.current.position.set(20, 2, -20);
    camRef.current.lookAt(8, 5, 0);
  };

  /**
   * Toggles the camera activation and resets the camera position.
   *
   * @return {void}
   */
  const handleCam = () => {
    setCameraActivated(!cameraActivated);
    resetCameraPosition();
  };

  return (
    <>
      {/* BackgroundDiv component */}
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 0%, 0% 0%" // gradient path
        color="#cee5e3ff" // background color
        width="100%" // width
        height="100%" // height
      />
      {/* BackgroundDiv component */}
      <BackgroundDiv
        path="50% 0%, 100% 100%, 100% 50%, 75% 0%" // gradient path
        color="#ad8b75ff" // background color
        width="100%" // width
        height="100%" // height
      />
      {/* Header */}
      <h2 className="absolute top-0 left-0 pt-2 pl-2 h-[5%] text-xl sm:text-2xl z-10">
        .aboutMe
      </h2>
      {/* Subheader */}
      <h3 className="absolute top-0 left-0 p-2 h-1/5 w-full text-4xl italic flex flex-col uppercase justify-center items-center sm:items-start sm:justify-center sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
        what defines me
      </h3>

      <div className="relative w-1/2 h-full">
        <div className="absolute w-full h-3/5 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Canvas className="rounded-e-full">
            {/* Create a perspective camera */}
            <PerspectiveCamera
              ref={camRef}
              makeDefault
              position={[20, 2, -20]}
              fov={70}
            />

            {/* Set the background color */}
            <color attach={"background"} args={["#111"]} />

            {/* Render a city environment */}
            <Environment preset="city" />

            {/* Render background stars */}
            <BackgroundStars
              radius={200}
              depth={10}
              count={2500}
              factor={7}
              saturation={0.7}
              fade={true}
            />

            {/* Render the main content */}
            <Suspense fallback={<Loader />}>
              <group scale={1}>
                {/* Render contact shadows */}
                <ContactShadows
                  opacity={0.8}
                  scale={30}
                  blur={1}
                  far={10}
                  resolution={256}
                  color="#000000"
                  position={[0, -5, 0]}
                />

                {/* Render an avatar */}
                <Avatar scaling={7.9} />

                {/* Load and render a 3D model */}
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

            {/* Render a ground plane */}
            <mesh position-y={-5.02} rotation-x={-Math.PI / 2}>
              <circleGeometry args={[25, 64]} />
              <meshStandardMaterial
                color={"white"}
                side={THREE.DoubleSide}
                opacity={1}
              />
            </mesh>

            {/* Enable orbit controls */}
            <OrbitControls
              enabled
              camera={camRef.current}
              enablePan={cameraActivated}
              enableRotate={cameraActivated}
              enableZoom={cameraActivated}
              target={[5, 0, 0]}
            />
          </Canvas>

          <div className="absolute flex justify-center items-center left-1/2 transform -translate-x-1/2">
            {/* Camera activation */}
            <div className="flex justify-center items-center mr-2">
              {!cameraActivated && (
                // Show camera activation icon
                <BsFillCameraVideoFill
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => handleCam()}
                />
              )}
              {cameraActivated && (
                // Show camera deactivation icon
                <BsFillCameraVideoOffFill
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => handleCam()}
                />
              )}
            </div>
            {/* Information group */}
            <div className="group flex justify-center items-center">
              {/* Information icon */}
              <HiInformationCircle className="w-6 h-6 inline-block cursor-help text-[#00a1ec]" />
              <div>
                <div className="hidden absolute left-10 bottom-8 bg-gray-200 p-2 rounded-lg text-sm shadow-md mt-2 text-center z-20 group-hover:block">
                  {/* Information tooltip */}
                  On / Off
                  <br />
                  <br />
                  Page scrolling will be temporarily disabled in the 3D scene.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-1/2 h-full flex flex-col ps-2 pe-2">
        {/* Word List */}
        <ul className="h-1/2 lg:h-2/3 pt-32 flex flex-col text-3xl sm:text-4xl lg:text-5xl xl:text-6xl justify-center items-center">
          {WordList.map((word) => (
            <ListItem
              className="pt-1 active:bg-transparent"
              key={word.keyword}
              text={word.keyword}
              onMouseEnter={() => {
                setWordHovered(word.keyword);
              }}
              onMouseLeave={() => {
                setWordHovered("");
              }}
            >
              {word.keyword}
            </ListItem>
          ))}
        </ul>

        {/* Quote Box */}
        <div className="quoteBox pt-10 pb-16 lg:pr-10 lg:pl-10 h-1/2 lg:h-1/3 flex justify-center items-center">
          <p
            className={`relative w-fit pl-6 pr-6 text-xl lg:text-2xl xl:text-3xl text-center italic bg-transparent rounded-3xl text-black font-semibold }`}
          >
            {/* Left quote icon */}
            <BiSolidQuoteRight className="absolute left-0 -top-6 w-6 h-6 text-[#606887]" />

            {/* Display quote based on hovered word */}
            {wordHovered !== "" &&
              WordList.find((el) => el.keyword === wordHovered).quote}

            {/* Display default text when no word is hovered */}
            {wordHovered === "" &&
              "Drag the mouse over a word to reveal a quote"}

            {/* Right quote icon */}
            <BiSolidQuoteRight className="absolute right-0 -bottom-6 w-6 h-6 text-[#606887]" />
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

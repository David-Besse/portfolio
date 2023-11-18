/* eslint-disable react/no-unknown-property */
import { useState, Suspense, useRef } from "react";
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
  cursor: default;

  &::after {
    content: "${(props) => props.text}"; // Display the value of the "text" prop
    position: absolute;
    color: #606887;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.3s linear both;
    }
  }

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
        path="0% 0%, 0% 100%, 50% 0%, 0% 0%"
        color="#cadfd3"
        width="100%"
        height="100%"
      />
      {/* BackgroundDiv component */}
      <BackgroundDiv
        path="50% 0%, 100% 100%, 100% 50%, 75% 0%"
        color="#ad8b75ff "
        width="100%"
        height="100%"
      />
      {/* Header */}
      <h2 className="absolute top-0 left-0 pt-2 pl-2 h-[5%] text-xl sm:text-2xl z-10">
        .aboutMe
      </h2>
      {/* Subheader */}
      <h3 className="absolute top-10 h-fit p-3 flex justify-center items-center text-4xl italic uppercase  left-1/2 transform -translate-x-1/2 whitespace-nowrap sm:text-5xl lg:text-6xl xl:text-[4.5rem] ">
        what defines me
      </h3>

      {/* left side */}
      <div className="relative w-2/3 h-full">
        {/* Background Bubble */}
        <div className="bgBuble absolute w-[70%] h-2/5 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0"></div>

        {/* Canvas component */}
        <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Canvas className="3dscene_aboutMe">
            {/* Create a perspective camera */}
            <PerspectiveCamera
              ref={camRef}
              makeDefault
              position={[20, 2, -20]}
              fov={70}
            />

            {/* Render a city environment */}
            <Environment preset="city" />

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

          {/* Camera activation and information group */}
          <div className="camera_aboutMe absolute top-[20%] left-[5%] flex justify-center items-center">
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
                <div className="hidden absolute w-[250px] left-[4.5rem] bottom-0 bg-gray-200 p-2 rounded-lg text-sm shadow-md mt-2 text-center z-20 group-hover:block">
                  {/* Information tooltip */}
                  On / Off
                  <br />
                  Page scrolling will be temporarily disabled in the 3D scene.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="absolute top-0 right-0 w-1/3 h-full pe-2 flex flex-col justify-around">
        {/* Word List */}
        <ul className="h-fit flex flex-col text-2xl sm:text-4xl xl:text-5xl 2xl:text-[3.5rem] justify-center items-center gap-4 sm:gap-3">
          {WordList.map((word) => (
            <ListItem
              className="sm:pt-1 active:bg-transparent"
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
      </div>

      {/* Bottom quote */}
      <div className="quoteBox absolute w-full sm:w-[60%] h-fit bottom-[15%] left-1/2 transform -translate-x-1/2 flex justify-center items-center px-2">
        <p
          className={`relative w-fit pl-4 pr-4 text-lg sm:text-2xl text-center italic bg-transparent rounded-3xl text-black font-semibold }`}
        >
          {/* Left quote icon */}
          <BiSolidQuoteRight className="absolute left-0 -top-4 w-4 h-4 text-[#606887]" />

          {/* Display quote based on hovered word */}
          {wordHovered !== "" &&
            WordList.find((el) => el.keyword === wordHovered).quote}

          {/* Display default text when no word is hovered */}
          {wordHovered === "" && "Drag the mouse over a word to reveal a quote"}

          {/* Right quote icon */}
          <BiSolidQuoteRight className="absolute right-0 -bottom-4 w-4 h-4 text-[#606887]" />
        </p>
      </div>
    </>
  );
};

export default AboutMe;

/* eslint-disable react/no-unknown-property */
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Gltf, Environment, ContactShadows, Text } from "@react-three/drei";
import styled from "styled-components";

import { HiInformationCircle } from "react-icons/hi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";

import Avatar from "./Scene/Avatar/Avatar";
import WordData from "./../../datas/WordData";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";

import "./aboutMe.scss";
import RigAboutMe from "./Scene/RigAboutMe/RigAboutMe";
import { useMediaQuery } from "@uidotdev/usehooks";

// Define a styled list item component
const ListItem = styled.li`
  &::after {
    content: "${(props) => props.$text}";
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
  const [cameraReset, setCameraReset] = useState(false);
  const isSmallMobile = useMediaQuery("only screen and (max-width : 767px)");

  const handleCam = () => {
    setCameraActivated(!cameraActivated);
  };

  const resetCamPosition = () => {
    setCameraReset(true);
  };

  return (
    <>
      {/* BackgroundDiv component */}
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 0%, 0% 0%"
        color="#c4ae96"
        width="100%"
        height="100%"
      />
      {/* BackgroundDiv component */}
      <BackgroundDiv
        path="50% 0%, 100% 100%, 100% 50%, 75% 0%"
        color="#89d6e8 "
        width="100%"
        height="100%"
      />
      {/* section title */}
      <h2 className="titleAboutMe absolute h-fit w-fit left-[1vh] bottom-[1vh] text-3xl sm:text-5xl z-[0] text-transparent opacity-[20%] lg:opacity-[10%] lg:text-[15vw] lg:left-0 lg:right-0 lg:bottom-[3rem] lg:w-full lg:text-center cursor-default dark:text-white">
        .aboutMe
      </h2>
      {/* Subheader */}
      <h3 className="absolute top-5 p-3 flex justify-center items-center text-4xl italic uppercase left-1/2 transform -translate-x-1/2 whitespace-nowrap sm:text-5xl lg:text-6xl xl:text-[4.5rem] z-10">
        what defines me
      </h3>

      {/* 3D Scene */}
      <div className="absolute left-0 lg:right-0 lg:left-[unset] w-full sm:w-2/3 lg:w-1/3 h-full z-[1]">
        {/* Background Bubble */}
        <section className="stage absolute w-[90%] sm:w-[52vh] h-[50%] sm:h-[52%] top-[22%] sm:top-[20%] left-1/2 transform -translate-x-1/2">
          <figure className="ball bubble shadow-2xl" />
        </section>

        {/* Canvas component */}
        <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Canvas shadows className="3dscene_aboutMe">
            <RigAboutMe
              cameraActivated={cameraActivated}
              cameraReset={cameraReset}
              setCameraReset={setCameraReset}
            />

            {/* Render a city environment */}
            <Environment preset="city" />

            <group scale={1}>
              {/* Render contact shadows */}
              <ContactShadows
                opacity={0.8}
                scale={30}
                blur={1}
                far={10}
                resolution={128}
                color="#000000"
                position={[0, -5, 0]}
              />

              <Suspense
                fallback={
                  <Text
                    color="black"
                    anchorX={isSmallMobile ? "center" : "right"}
                    anchorY="top-baseline"
                    rotation={[
                      isSmallMobile ? 45 : 0,
                      Math.PI,
                      isSmallMobile ? -45 : 0,
                    ]}
                    fontSize={isSmallMobile ? 2.5 : 1.5}
                  >
                    Jedi incoming . . .
                  </Text>
                }
              >
                {/* Render an avatar */}
                <Avatar />

                {/* Load and render a 3D model */}
                <Gltf
                  receiveShadow
                  castShadow
                  src="/models/desktop_chair.glb"
                  scale={1}
                  position={[-0.35, -5, 0]}
                  rotation={[0, Math.PI, 0]}
                />
              </Suspense>
            </group>
          </Canvas>

          {/* Camera activation and information group */}
          <div className="camera_aboutMe absolute top-[14%] lg:top-[unset] lg:bottom-[30%] left-[4%] lg:left-1/2 lg:-translate-x-1/2 transform flex justify-center items-center gap-4">
            <GrPowerReset
              className="w-6 h-6 cursor-pointer"
              onClick={() => resetCamPosition()}
            />
            {/* Camera activation */}
            <div className="flex justify-center items-center">
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
              <HiInformationCircle className="w-5 h-5 inline-block cursor-help text-[#00a1ec]" />
              <div>
                <div className="hidden absolute w-[250px] left-[4.5rem] lg:left-[8rem] bottom-0 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-sm shadow-md mt-2 text-center z-20 group-hover:block">
                  {/* Information tooltip */}
                  When the camera is activated, page scrolling is temporarily
                  deactivated so that you can zoom in on the character.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Words bloc */}
      <div className="absolute top-0 right-0 lg:left-0 sm:w-1/3 h-full flex flex-col justify-around pb-16 sm:pr-4 lg:px-16 z-[5]">
        {/* Word List */}
        <ul className="h-fit pe-2 sm:pe-0 flex flex-col text-3xl sm:text-4xl xl:text-5xl 2xl:text-[3.5rem] justify-center items-end lg:items-start gap-4 sm:gap-8 lg:gap-10">
          {WordData.map((word) => (
            <ListItem
              className="liItem pt-[2px] pl-[1px] sm:pt-[4px]"
              key={word.keyword}
              $text={word.keyword}
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

      {/* Quote bloc */}
      <div className="quoteBox absolute w-full lg:w-1/3 h-fit lg:h-full top-[73%] sm:top-[unset] sm:bottom-[15%] lg:bottom-[unset] left-1/2 transform -translate-x-1/2 flex justify-center items-end lg:items-center px-4 sm:px-16 z-0">
        <p className="relative w-fit h-fit px-4 lg:py-4 text-lg sm:text-2xl text-center italic bg-transparent rounded-3xl dark:text-white font-semibold lg:leading-[3rem!important] lg:tracking-wider">
          {/* Left quote icon */}
          <BiSolidQuoteRight className="absolute left-0 -top-4 w-4 h-4 text-[#606887] dark:text-white" />

          {/* Display quote based on hovered word */}
          {wordHovered !== "" &&
            WordData.find((el) => el.keyword === wordHovered).quote}

          {/* Display default text when no word is hovered */}
          {wordHovered === "" && "Drag the mouse over a word to reveal a quote"}

          {/* Right quote icon */}
          <BiSolidQuoteRight className="absolute right-0 -bottom-4 w-4 h-4 text-[#606887] dark:text-white" />
        </p>
      </div>
    </>
  );
};

export default AboutMe;

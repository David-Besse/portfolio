import { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Gltf,
  Environment,
  ContactShadows,
  useCursor,
  useProgress,
} from "@react-three/drei";
import styled from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Tooltip } from "@nextui-org/react";

import Avatar from "./Scene/Avatar/Avatar";
import WordData from "./../../datas/WordData";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import RigAboutMe from "./Scene/RigAboutMe/RigAboutMe";

import { BiSolidQuoteRight } from "react-icons/bi";
import { Md3DRotation } from "react-icons/md";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { RxReset } from "react-icons/rx";
import "./aboutMe.scss";

// Define a styled list item component
const ListItem = styled.li`
  &::after {
    content: "${(props) => props.$text}";
  }
`;

/**
 * Renders the AboutMe component.
 *
 * @return {JSX.Element} The rendered AboutMe component.
 */
const AboutMe = () => {
  /* state only used in this component */
  const [wordHovered, setWordHovered] = useState("");
  const [sceneHovered, setSceneHovered] = useState(false);
  const [cameraActivated, setCameraActivated] = useState(false);
  const [cameraReset, setCameraReset] = useState(false);
  /* ................................. */

  const isTablet = useMediaQuery("only screen and (max-width : 1023px)");
  const aboutMeSceneRef = useRef(null);

  useCursor(sceneHovered, "grab", "auto", aboutMeSceneRef.current);

  /**
   * Toggles the camera activation state.
   *
   * @return {undefined} No return value.
   */
  const handleCam = () => {
    setCameraActivated(!cameraActivated);
  };

  /**
   * Resets the camera position.
   *
   * @param {none} - This function does not accept any parameters.
   * @return {none} - This function does not return any value.
   */
  const resetCamPosition = () => {
    setCameraReset(true);
  };

  const Loader = () => {
    const { progress } = useProgress();

    return (
      <Html center className="text-base text-black dark:lg:text-white">
        Jedi teleportation in progress : {progress} %.
      </Html>
    );
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
      <h2 className="titleSection absolute h-fit w-fit left-[1vh] bottom-[1vh] text-3xl sm:text-5xl z-[0] text-transparent opacity-[20%] lg:opacity-[10%] lg:text-[15vw] lg:left-0 lg:right-0 lg:bottom-[3rem] lg:w-full lg:text-center cursor-default dark:text-white">
        .aboutMe
      </h2>
      {/* Subheader */}
      <h3 className="absolute top-5 p-3 flex justify-center items-center text-4xl italic uppercase left-1/2 transform -translate-x-1/2 whitespace-nowrap sm:text-5xl lg:text-6xl xl:text-[4.5rem] z-10">
        what defines me
      </h3>

      {/* Background Bubble */}
      <section className="stage relative w-[90%] h-[50%] sm:w-[52vh] sm:h-[52%] lg:w-[50vh] lg:h-[50%] xl:w-[60vh] xl:h-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <figure className="ball bubble shadow-2xl" />
      </section>

      {/* 3D Scene */}
      <div className="absolute left-0 lg:right-0 lg:left-[unset] w-full sm:w-2/3 lg:w-2/3 h-full z-10">
        {/* Canvas component */}
        <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Canvas
            shadows
            className="3dscene_aboutMe"
            ref={aboutMeSceneRef}
            onPointerEnter={
              cameraActivated ? () => setSceneHovered(true) : null
            }
            onPointerLeave={
              cameraActivated ? () => setSceneHovered(false) : null
            }
          >
            <RigAboutMe
              cameraActivated={cameraActivated}
              cameraReset={cameraReset}
              setCameraReset={setCameraReset}
            />
            <Environment preset="city" />
            <group scale={1}>
              <ContactShadows
                opacity={0.8}
                scale={30}
                blur={1}
                far={10}
                resolution={128}
                color="#000000"
                position={[0, -5, 0]}
              />
              <Suspense fallback={<Loader />}>
                <Avatar />
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

          {/* Camera activation */}
          <div className="absolute top-[20%] lg:top-[20%] left-[4%] lg:left-[unset] lg:right-[25%] flex justify-center items-center gap-4 border-2 border-white px-4 py-2 rounded-full">
            <Tooltip
              content={
                <div className="px-1 py-2">
                  <p className="text-small font-bold">
                    Activate/Deactivate the camera
                  </p>
                  <p className="text-tiny text-center">
                    scrolling will be disabled in 3D scene
                  </p>
                </div>
              }
              showArrow={true}
              placement="bottom"
              className="z-50"
            >
              <span className="flex justify-center items-center dark:text-[#4d4d4d]">
                <Md3DRotation
                  className={`w-8 h-8 cursor-pointer ${
                    cameraActivated
                      ? "text-green-500 scale-110"
                      : "dark:text-white"
                  }`}
                  onClick={() => handleCam()}
                />
              </span>
            </Tooltip>
            <Tooltip
              content={
                <div className="px-1 py-2">
                  <p className="text-small font-bold">Reset camera position</p>
                </div>
              }
              showArrow={true}
            >
              <span>
                <RxReset
                  className="w-6 h-6 cursor-pointer dark:text-white active:text-green-500 active:scale-110"
                  onClick={() => resetCamPosition()}
                />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Words bloc */}
      <aside className="absolute top-0 right-0 lg:left-0 sm:w-1/3 h-full flex flex-col justify-around pb-16 sm:pr-4 lg:px-16 z-20">
        {/* Word List */}
        <ul className="h-fit pe-2 sm:pe-0 flex flex-col text-3xl sm:text-4xl xl:text-5xl 2xl:text-[3.5rem] justify-center items-end lg:items-start gap-4 sm:gap-8 lg:gap-10 ">
          {WordData.map((word) => (
            <ListItem
              className="listItem pt-[2px] pl-[1px] sm:pt-[4px]"
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
      </aside>

      {/* Quote bloc */}
      {wordHovered !== "" && (
        <blockquote className="quoteBox absolute w-full lg:w-1/3 h-fit lg:h-full top-[75%] sm:top-[unset] sm:bottom-[15%] lg:bottom-[4vh] left-1/2 transform -translate-x-1/2 flex justify-center items-end lg:items-center px-4 sm:px-16 lg:px-4 xl:px-10 2xl:px-20 z-10">
          <p className="relative w-fit h-fit px-4 lg:py-1 text-lg sm:text-2xl text-center italic bg-transparent rounded-3xl font-semibold lg:leading-[2rem!important] lg:tracking-wider dark:text-white dark:lg:text-[#4d4d4d]">
            <BiSolidQuoteRight className="absolute left-0 -top-4 w-4 h-4 text-[#606887] dark:text-white dark:lg:text-[#4d4d4d]" />
            {WordData.find((el) => el.keyword === wordHovered).quote}
            <BiSolidQuoteRight className="absolute right-0 -bottom-4 w-4 h-4 text-[#606887] dark:text-white dark:lg:text-[#4d4d4d]" />
          </p>
        </blockquote>
      )}
      {/* Display default text when no word is hovered */}
      {wordHovered === "" && (
        <blockquote className="absolute flex flex-col gap-8 justify-center items-center top-[75%] w-full lg:w-[20vw] lg:left-1/2 lg:-translate-x-1/2 lg:transform text-center lg:top-[42%] 2xl:top-[45%] text-sm sm:text-base lg:text-lg p-2 h-fit z-10 dark:text-white dark:lg:text-[#4d4d4d]">
          {isTablet ? "Touch a word" : "Drag the mouse over a word"} to reveal a
          quote <br />
          <FaRegArrowAltCircleLeft className="w-12 h-12" />
        </blockquote>
      )}
    </>
  );
};

export default AboutMe;

/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "@uidotdev/usehooks";

import CloudSphere from "./CloudSphere/CloudSphere";
import RigMySkills from "./RigMySkills/RigMySkills";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";

import "./MySkills.scss";

/**
 * Render the MySkills component.
 *
 * @returns {JSX.Element} The rendered MySkills component.
 */
const MySkills = () => {
  const isSmallMobile = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <>
      {/* Heading */}
      {/* <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl z-10">
        .mySkills
      </h2> */}
      {/* Background Div 1 */}
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 0%, 0% 0%"
        color="#c4ae96"
        width="100%"
        height="100%"
      />
      {/* Background Div 2 */}
      <BackgroundDiv
        path="50% 0%, 100% 100%, 100% 50%, 75% 0%"
        color="#89d6e8 "
        width="100%"
        height="100%"
      />

      {/* Title */}
      {!isSmallMobile && (
        <div className="h-full w-full flex justify-center items-center sm:w-[80vh] sm:h-[80%] lg:w-[90vh] lg:h-[90%]">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="titleMySkills rounded-full z-[1] cursor-not-allowed"
          >
            <defs>
              <path
                id="circlePath"
                fill="transparent"
                d="M 50, 250 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
              />
            </defs>
            <text id="text" className="titleMySkillsFont text-base sm:text-2xl font-bold">
              <textPath
                id="textPath"
                href="#circlePath"
                textLength={Math.floor(Math.PI * 2 * 196)}
                fill="#606887"
              >
                Here you can consult my current knowledge sphere, which is
                constantly evolving...
              </textPath>
            </text>
          </svg>
        </div>
      )}
      {isSmallMobile && (
        <div className="titleMySkillsFont w-full h-full flex flex-col justify-between text-center text-xl font-bold relative z-10 px-6">
          <h2 className="pt-[5%]">
            Here you can consult my current knowledge sphere,
          </h2>
          <h2 className="pb-[5%]">which is constantly evolving...</h2>
        </div>
      )}

      {/* Skills Sphere */}
      <div className="absolute bottom-[calc(50% - 16px)] left-1/2 w-[60vh] h-[60%] sm:w-[70vh] sm:h-[70%] transform -translate-x-1/2 translate-y-[calc(50% - 16px)] z-20">
        <Canvas className="">
          <fog attach="fog" args={["#202025", 40, 80]} />
          <RigMySkills />
          <CloudSphere
            count={16}
            radius={60}
            scaling={isSmallMobile ? 1 : 0.9}
          />
        </Canvas>
      </div>
    </>
  );
};

export default MySkills;

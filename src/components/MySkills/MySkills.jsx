/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import CloudSphere from "./CloudSphere/CloudSphere";
import RigMySkills from "./RigMySkills/RigMySkills";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";

/**
 * Render the MySkills component.
 *
 * @returns {JSX.Element} The rendered MySkills component.
 */
const MySkills = () => {
  return (
    <>
      {/* Heading */}
      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl z-10">
        .mySkills
      </h2>
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
      {/* Main Content */}
      <div className="h-2/3 w-full sm:w-[75vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <Canvas className="rounded-full">
          <fog attach="fog" args={["#202025", 40, 80]} />
          <RigMySkills />
          <Suspense>
            <CloudSphere count={16} radius={60} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default MySkills;

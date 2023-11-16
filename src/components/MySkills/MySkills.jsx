/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import CloudSphere from "./CloudSphere/CloudSphere";
import RigMySkills from "./RigMySkills/RigMySkills";

import "./mySkills.scss";
import { Sky } from "@react-three/drei";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";

const MySkills = () => {
  return (
    <div
      id="mySkills"
      className="relative h-screen w-screen bg-[#d4cacdff] snap-center"
    >
      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl">
        .mySkills
      </h2>
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 0%, 0% 0%"
        color="#cee5e3ff"
        width="100%"
        height="100%"
      />
      <BackgroundDiv
        path="50% 0%, 100% 100%, 100% 50%, 75% 0%"
        color="#ad8b75ff"
        width="100%"
        height="100%"
      />
      <div className="h-2/3 w-1/2 absolute top-1/2 transform -translate-y-1/2 right-0">
        <Canvas className="rounded-s-full shadow-2xl">
          <fog attach="fog" args={["#202025", 40, 80]} />
          <color attach={"background"} args={["black"]} />
          <RigMySkills />
          <Sky />
          <Suspense>
            <CloudSphere count={16} radius={60} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default MySkills;

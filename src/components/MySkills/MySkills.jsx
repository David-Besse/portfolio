/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CloudSphere from "./CloudSphere/CloudSphere";
import RigMySkills from "./RigMySkills/RigMySkills";

import "./mySkills.scss";
import { Sky } from "@react-three/drei";

const MySkills = () => {
  return (
    <div id="mySkills" className="mySkills relative h-screen w-screen bg-[#f3f2f9] snap-center">
      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl font-bold z-10">
        .mySkills
      </h2>
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

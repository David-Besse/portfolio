/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { Canvas } from "@react-three/fiber";
import CloudSphere from "./CloudSphere/CloudSphere";
import RigMySkills from "./RigMySkills/RigMySkills";

import "./mySkills.scss";

const MySkills = () => {
  const { setCurrentSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setCurrentSection("mySkills");
  };

  return (
    <section id="mySkills" className="mySkills relative h-screen w-screen ">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="50%" />
      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl font-bold z-10">
        .mySkills
      </h2>
      <div className="w-full h-full absolute top-0 left-0 z-5">
        <Canvas>
          <fog attach="fog" args={["#202025", 40, 80]} />
          <color attach={"background"} args={["#f3f2f9"]} />
          <RigMySkills />
          <Suspense>
            <CloudSphere count={16} radius={60} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default MySkills;

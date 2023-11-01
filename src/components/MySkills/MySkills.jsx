/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text,
  TrackballControls,
  Stars,
  OrbitControls,
} from "@react-three/drei";
import { useMemo, useRef, useState } from "react";

import WordList from "../../datas/WordList";

const Word = ({ word, position }) => {
  const color = new THREE.Color();
  const fontProps = {
    font: "/ArchitectsDaughter-Regular.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  // Change the mouse cursor on hover
  const handleCursor = (hovered) => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  };

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );

    // Call the handleCursor function to change the cursor
    handleCursor(hovered);
  });

  return (
    <Text
      ref={ref}
      position={position}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...fontProps}
    >
      {word}
    </Text>
  );
};

const Cloud = ({ count = 4, radius = 20 }) => {
  const wordsList = Object.keys(WordList);

  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const spherical = new THREE.Spherical(
          radius,
          phiSpan * i,
          thetaSpan * j
        );
        const position = new THREE.Vector3().setFromSpherical(spherical);
        temp.push(position);
      }
    }

    return temp;
  }, [count, radius]);

  return (
    <group>
      {words.map((pos, index) => (
        <Word
          key={index}
          position={pos}
          word={wordsList[Math.floor(Math.random() * wordsList.length)]}
        />
      ))}
    </group>
  );
};

const MySkills = () => {
  const { setCurrentSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setCurrentSection("mySkills");
  };

  return (
    <section
      id="mySkills"
      className="mySkills relative h-screen w-screen snap-center"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <h2 className="absolute top-2 left-2 title_list h-[5%] text-2xl font-bold z-10">
        .mySkills
      </h2>
      <div
        id="aboutMe_scene"
        className="w-full h-full absolute top-0 left-0 z-5"
      >
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={["#202025", 0, 80]} />
          <color attach={"background"} args={["black"]} />
          {/* <Stars /> */}
          <Cloud count={6} radius={20} />
          <TrackballControls />
          <OrbitControls autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>
    </section>
  );
};

export default MySkills;

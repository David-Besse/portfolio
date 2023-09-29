/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FloatingText from "./FloatingText/FloatingText";

const Scene = () => {
  return (
    <div className="w-full h-full border border-black ">
      <Canvas camera={{ position: [-4, 0, 20], fov: 30, near: 0.001 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <FloatingText />
        </Suspense>
        <axesHelper scale={1} />
      </Canvas>
    </div>
  );
};

export default Scene;

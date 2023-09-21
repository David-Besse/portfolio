import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./Earth";

const Scene = () => {
  return (
    <div>
      <Canvas>
        <Suspense fallback={<div>Loading...</div>}>
          <Earth />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;

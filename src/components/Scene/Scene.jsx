import { Canvas } from "@react-three/fiber";
import Cube from "../Cube/Cube";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas>
      <Cube />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;

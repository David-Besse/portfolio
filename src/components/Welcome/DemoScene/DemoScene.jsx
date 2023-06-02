import { Canvas } from "@react-three/fiber";
import Cube from "./Cube/Cube";
import { OrbitControls } from "@react-three/drei";

const DemoScene = () => {
  return (
    <Canvas>
      <Cube />
      <OrbitControls />
    </Canvas>
  );
};

export default DemoScene;

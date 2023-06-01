import { Canvas } from "@react-three/fiber";
// import Cube from "../Cube/Cube";
import { Box, OrbitControls, Sphere } from "@react-three/drei";
import { useState } from "react";

const Scene = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Canvas>
      {/* <Cube /> */}
      <Sphere
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshBasicMaterial color={hovered ? "yellow" : "green"} />
      </Sphere>
      <Box position={[2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;

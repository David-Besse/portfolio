import { Box, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const ref = useRef(null);

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <>
      <Plane ref={ref} args={[1, 1]} position={[0, 0, 2]} material-color="red" />
      <Box args={[1, 1, 1]} material-color="hotpink" />
    </>
  );
};

export default Cube;

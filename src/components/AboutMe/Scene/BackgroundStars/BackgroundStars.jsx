import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const BackgroundStars = (props) => {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    starsRef.current.rotation.y = elapsedTime / 20;
    starsRef.current.rotation.x = elapsedTime / 20;
  });

  return <Stars {...props} ref={starsRef} />;
};

export default BackgroundStars;

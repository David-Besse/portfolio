/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei";
import { Avatar } from "./Avatar/Avatar";
import { useControls } from "leva";

const Scene = () => {
  const { animation } = useControls({
    animation: {
      value: "Aucune",
      options: ["Aucune", "Typing", "Standing", "Walking"],
    },
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[6, 0, 3]} />
      <Avatar animation={animation} />
    </>
  );
};

export default Scene;

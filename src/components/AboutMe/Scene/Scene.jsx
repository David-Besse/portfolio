/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei";
import { Avatar } from "./Avatar/Avatar";
import { useControls } from "leva";

const Scene = () => {
  const { animation } = useControls({
    animation: {
      value: "Walking",
      options: ["Walking","Typing", "Falling", "Standing", "Aucune"],
    },
  });

  return (
    <>
      <PerspectiveCamera makeDefault frames={30} position={[3, 1, 2]} />
      <Avatar animation={animation} />
    </>
  );
};

export default Scene;

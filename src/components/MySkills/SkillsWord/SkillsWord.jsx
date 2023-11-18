import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef } from "react";

const SkillsWord = ({ word, position }) => {
  const fontProps = {
    font: "/Righteous-Regular.ttf",
    fontSize: 3,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
    strokeColor: "black",
    strokeOpacity: 0.5,
    strokeWidth: 0.1,
  };
  const ref = useRef();

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);

    // Calculate the distance between the text and the camera
    const distanceToCamera = ref.current.position.distanceTo(camera.position);

    // Set the text color based on the distance to the camera
    ref.current.material.color.set(distanceToCamera < 42 ? "#d74752" : "white");
  });

  return (
    <Text
      ref={ref}
      position={position}
      {...fontProps}
    >
      {word}
    </Text>
  );
};

SkillsWord.propTypes = {
  position: PropTypes.any,
  word: PropTypes.any
}

export default SkillsWord;

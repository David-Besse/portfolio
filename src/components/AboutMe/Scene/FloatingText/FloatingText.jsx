/* eslint-disable react/no-unknown-property */
import { Center, Text3D } from "@react-three/drei";

import wordList from "../../../../datas/wordList";
import fontForWords from "../../../../assets/fonts/Baloo Thambi 2_Regular.json";
import { useRef, useState } from "react";

const FloatingText = () => {
  const wordsToDisplay = Object.keys(wordList);
  const refWords = useRef([]);
  const [hovered, setHovered] = useState(false);
  const [currentSelectedWord, setCurrentSelectedWord] = useState(null);

  const over = (index) => {
    setCurrentSelectedWord(index);
    setHovered(true);
  };

  const out = () => {
    setCurrentSelectedWord(null);
    setHovered(false);
  };

  const wordClicked = (event) => {
    event.stopPropagation();
  };

  return (
    <group>
      {wordsToDisplay.map((el, index) => (
        <Center key={el} position={[-6, -(index * 1.2) + 3, 4]}>
          <Text3D
            ref={(ref) => (refWords.current[index] = ref)}
            lineHeight={0.5}
            letterSpacing={-0.06}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.05}
            bevelThickness={0.1}
            height={0.01}
            size={0.5}
            font={fontForWords}
            onPointerOver={() => over(index)}
            onPointerOut={() => out()}
            onClick={(event) => wordClicked(event, index)}
          >
            {el}
            <meshPhongMaterial color={"#5ea1ff"} />
            {hovered && currentSelectedWord === index && (
              <meshPhongMaterial color={"grey"} />
            )}
          </Text3D>
          <pointLight color="#f6f3ea" position={[0, 0, 0]} intensity={1} />
        </Center>
      ))}
    </group>
  );
};

export default FloatingText;

/* eslint-disable react/no-unknown-property */
import { Sphere } from "@react-three/drei";
import { useLoader } from "@react-three/fiber/dist/react-three-fiber.cjs";

import EarthCloudMap from "../../../../assets/textures/8K_earth_cloudmap.jpg";
import EarthDayMap from "../../../../assets/textures/8K_earth_daymap.jpg";
// import EarthNightMap from "../../../../assets/textures/8K_earth_nightmap.jpg";
import EarthNormalMap from "../../../../assets/textures/8K_earth_normal_map.jpg";
import EarthSpecularMap from "../../../../assets/textures/8K_earth_specular_map.jpg";
import { TextureLoader } from "three";

const Earth = () => {
  const [dayMap, normalMap, specularMap, cloudMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap,
      EarthNormalMap,
      EarthSpecularMap,
      EarthCloudMap,
    ]
  );

  return (
    <>
      <ambientLight intensity={1} />
      <Sphere args={[1.1, 50, 50]}>
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={dayMap} normalMap={normalMap} />
      </Sphere>
    </>
  );
};

export default Earth;

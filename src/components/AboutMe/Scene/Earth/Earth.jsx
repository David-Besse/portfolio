/* eslint-disable react/no-unknown-property */
import { DoubleSide, TextureLoader } from "three";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import EarthCloudMap from "../../../../assets/textures/8K_earth_cloudmap.jpg";
import EarthDayMap from "../../../../assets/textures/8K_earth_daymap.jpg";
import EarthNormalMap from "../../../../assets/textures/8K_earth_normal_map.jpg";
import EarthSpecularMap from "../../../../assets/textures/8K_earth_specular_map.jpg";

const Earth = () => {
  // on charge toutes les textures
  const [dayMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudMap,
  ]);

  const earthRef = useRef(null);
  const cloudRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 8;
    cloudRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[4, 2, 4]} intensity={1.5} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudRef} position={[0, 0, -2]}>
        <sphereGeometry args={[2.205, 50, 50]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, -2]}>
        <sphereGeometry args={[2.2, 50, 50]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </>
  );
};

export default Earth;

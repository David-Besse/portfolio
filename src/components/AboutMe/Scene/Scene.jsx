/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Gltf } from "@react-three/drei";
import { useLocation, useRoute } from "wouter";
import Portal from "./Portal/Portal";
import Rig from "./Rig/Rig";

const Scene = () => {
  // Use the Wouter routing hooks to get route parameters and set location
  const [, params] = useRoute('/portal/:id');
  const [, setLocation] = useLocation();

  return (
    <>
      {/* Navigation link */}
      <a
        className="absolute top-16 left-10 text-s z-10"
        href=""
        onClick={(e) => {
          e.preventDefault();
          setLocation("/#aboutMe");
        }}
      >
        {params ? "< back" : "double click to enter portal"}
      </a>
      <Canvas
        // Set up the 3D scene camera
        camera={{ fov: 75, position: [0, 0, 20] }}
        eventSource={document.getElementById("aboutMe_scene")}
        eventPrefix="client"
      >
        {/* Create portals with different properties */}
        <Portal
          id="01"
          name={`Prag\nmatic`}
          author="Omar Faruq Tawsif"
          bg="#e4cdac"
          position={[-2.15, 0, 0.5]}
          rotation={[0, 0.5, 0]}
        >
          {/* Load a 3D model */}
          <Gltf
            src="./public/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb"
            scale={8}
            position={[0, -0.7, -2]}
          />
        </Portal>

        <Portal
          id="02"
          name={`Prag\nmatic`}
          author="Omar Faruq Tawsif"
          bg="#e4cdac"
          position={[-1.1, 0, 0.15]}
          rotation={[0, 0.3, 0]}
        >
          {/* Load a 3D model */}
          <Gltf
            src="./public/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb"
            scale={8}
            position={[0, -0.7, -2]}
          />
        </Portal>

        <Portal 
          id="03" 
          name="tea" 
          author="Omar Faruq Tawsif"
          position={[0, 0, 0]}
        >
          {/* Load a 3D model */}
          <Gltf
            src="./public/fiesta_tea-transformed.glb"
            position={[0, -2, -3]}
          />
        </Portal>

        <Portal
          id="04"
          name="still"
          author="Omar Faruq Tawsif"
          bg="#d1d1ca"
          position={[1.1, 0, 0.15]}
          rotation={[0, -0.3, 0]}
        >
          {/* Load a 3D model */}
          <Gltf
            src="./public/still_life_based_on_heathers_artwork-transformed.glb"
            scale={1.5}
            position={[0, -0.8, -4]}
          />
        </Portal>

        <Portal
          id="05"
          name="still"
          author="Omar Faruq Tawsif"
          bg="#d1d1ca"
          position={[2.15, 0, 0.5]}
          rotation={[0, -0.5, 0]}
        >
          {/* Load a 3D model */}
          <Gltf
            src="./public/still_life_based_on_heathers_artwork-transformed.glb"
            scale={1.5}
            position={[0, -0.8, -4]}
          />
        </Portal>

        {/* Add camera controls */}
        <Rig />

      </Canvas>
    </>
  );
};

export default Scene;

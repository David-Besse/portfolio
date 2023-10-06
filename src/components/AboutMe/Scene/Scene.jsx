import { Canvas } from "@react-three/fiber";
import { Gltf, Stars } from "@react-three/drei";
import { useLocation, useRoute } from "wouter";
import Portal from "./Portal/Portal";
import Rig from "./Rig/Rig";
import AboutMeList from "../../../datas/AboutMeList";

const Scene = () => {
  const [, params] = useRoute("/portal/:id");
  const [, setLocation] = useLocation();

  return (
    <>
      {/* Navigation link */}
      <a
        className="absolute top-16 left-10 text-s z-10"
        href="#"
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
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        {/* Create portals with different properties */}
        {AboutMeList.map((el) => (
          <Portal
            id={el.id}
            name={el.name}
            author={el.author}
            bg={el.bg}
            position={el.position}
            rotation={el.rotation}
            key={el.id}
          >
            {/* Load a 3D model */}
            <Gltf
              src={`./public/` + el.gltf.src}
              scale={el.gltf.scale}
              position={el.gltf.position}
            />
          </Portal>
        ))}

        {/* Add camera controls */}
        <Rig />
      </Canvas>
    </>
  );
};

export default Scene;

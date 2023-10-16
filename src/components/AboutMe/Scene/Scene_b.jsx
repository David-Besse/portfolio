/* eslint-disable react/no-unknown-property */
import { Gltf, OrbitControls, Sky } from "@react-three/drei";
import Portal from "./Portal/Portal";
import Rig from "./Rig/Rig";
import AboutMeList from "../../../datas/AboutMeList";
import PropTypes from "prop-types";
import { Avatar } from "./Avatar/Avatar";
import { useControls } from "leva";
import { Suspense } from "react";

const Scene = ({ portalId, setPortalId }) => {
  const { animation } = useControls({
    animation: {
      value: "Aucune",
      options: ["Typing", "Falling", "Standing", "Aucune"],
    },
  });

  return (
    <>
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
          givePortalId={portalId}
          changePortalId={setPortalId}
        >
          {/* Load a 3D model */}
          <>
            <Sky />
            {el.id !== "02" && (
              <Gltf
                src={el.gltf.src}
                scale={el.gltf.scale}
                position={el.gltf.position}
                rotation={el.gltf.rotation}
              />
            )}
            {el.id === "02" && (
              <Suspense>
                <Avatar animation={animation} position={el.gltf.position} />
              </Suspense>
            )}
            <OrbitControls />
            <axesHelper />
          </>
        </Portal>
      ))}
      {/* Add camera controls */}
      <Rig givePortalId={portalId} />
    </>
  );
};

Scene.propTypes = {
  portalId: PropTypes.string,
  setPortalId: PropTypes.func.isRequired,
};

export default Scene;

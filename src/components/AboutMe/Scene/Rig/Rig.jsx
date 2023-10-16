import * as THREE from "three";
import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

// Import Prop Types
import PropTypes from "prop-types";

const Rig = ({
  position = new THREE.Vector3(0, 0, 2.5),
  focus = new THREE.Vector3(0, 0, 0),
  givePortalId,
}) => {
  // Retrieve camera controls and scene using useThree
  const { controls, scene } = useThree();

  useEffect(() => {
    const active = scene.getObjectByName(givePortalId);
    if (active) {
      // Update the position and focus vectors based on the active object's parent
      active.parent.localToWorld(position.set(0, 0, 0.25));
      active.parent.localToWorld(focus.set(0, 0, -2));
    }
    // Set the camera's look-at position with optional smooth transition
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
  });

  return (
    <CameraControls
      // makeDefault
      // minPolarAngle={1}
      // maxPolarAngle={Math.PI / 1.5}
      // minAzimuthAngle={-0.2}
      // maxAzimuthAngle={0.2}
      // minDistance={2}
      // maxDistance={10}
      smoothTime={1}
      position={[0, 0, 10]}
    />
  );
};

Rig.propTypes = {
  position: PropTypes.object,
  focus: PropTypes.object,
  givePortalId: PropTypes.string,
};

export default Rig;

/* eslint-disable react/prop-types */
import * as THREE from "three";
import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRoute } from "wouter";

const Rig = ({
  position = new THREE.Vector3(0, 0, 3),
  focus = new THREE.Vector3(0, 0, 0),
}) => {
  // Retrieve camera controls and scene using useThree
  const { controls, scene } = useThree();
  // Retrieve route parameters using useRoute
  const [, params] = useRoute("/portal/:id");

  useEffect(() => {
    // Get the active object from the scene based on route parameters
    const active = scene.getObjectByName(params?.id);
    if (active) {
      // Update the position and focus vectors based on the active object's parent
      active.parent.localToWorld(position.set(0, 0.5, 0.25));
      active.parent.localToWorld(focus.set(0, 0, -2));
    }
    // Set the camera's look-at position with optional smooth transition
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
  });

  return (
    <CameraControls
      makeDefault
      // Limit the minimum vertical angle
      minPolarAngle={1}
      // Limit the maximum vertical angle
      maxPolarAngle={Math.PI / 1.5}
      // Limit the minimum horizontal angle
      minAzimuthAngle={-0.5}
      // Limit the maximum horizontal angle
      maxAzimuthAngle={0.5}
      // Minimum distance the camera can zoom to
      minDistance={2}
      // Maximum distance the camera can zoom to
      maxDistance={10}
      // Control the smooth transition speed of the camera
      smoothTime={0.5} // Time in seconds to reach the new position
    />
  );
};

export default Rig;


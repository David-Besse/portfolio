/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useRef, useState } from "react";
import { extend, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshPortalMaterial,
  Text,
} from "@react-three/drei";
import { useLocation, useRoute } from "wouter";
import { easing, geometry } from "maath";
import { suspend } from "suspend-react";

// Extend the geometry module
extend(geometry);

// Import fonts
const regular = import("../../../../assets/fonts/ArchitectsDaughter-Regular.woff");
const medium = import("../../../../assets/fonts/ArchitectsDaughter-Regular.woff");

const Portal = ({
  id,
  name,
  author,
  bg,
  width = 1,
  height = 1.61803398875,
  children,
  ...props
}) => {
  const portal = useRef();

  // Use the Wouter routing hooks
  const [, params] = useRoute('/portal/:id');
  const [, setLocation] = useLocation();

  // State for tracking hover state
  const [hovered, hover] = useState(false);

  // Change cursor on hover
  useCursor(hovered);

  // UseFrame for animation
  useFrame((dt) =>
    easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, dt)
  );

  // Handle double click on the portal
  const handleDoubleClick = (e) => {
    e.stopPropagation();
    setLocation('/portal/' + e.object.name);
  };

  return (
    <group {...props}>
      {/* Display the portal name */}
      <Text
        font={suspend(medium).default}
        fontSize={0.3}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 0.715, 0.01]}
        material-toneMapped={false}
      >
        {name}
      </Text>

      {/* Display the portal ID */}
      <Text
        font={suspend(regular).default}
        fontSize={0.1}
        anchorX="right"
        position={[0.4, -0.659, 0.01]}
        material-toneMapped={false}
      >
        /{id}
      </Text>

      {/* Display the portal author */}
      <Text
        font={suspend(regular).default}
        fontSize={0.04}
        anchorX="right"
        position={[0.0, -0.677, 0.01]}
        material-toneMapped={false}
      >
        {author}
      </Text>

      {/* Create the clickable portal */}
      <mesh
        name={id}
        onDoubleClick={handleDoubleClick}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial
          ref={portal}
          events={params?.id === id}
          side={THREE.DoubleSide}
        >
          {/* Set the background color of the portal */}
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

export default Portal;

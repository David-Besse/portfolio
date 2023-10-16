// Import React and Three.js
import * as THREE from "three";
import { useRef, useState } from "react";

// Import React Three Fiber hooks
import { extend, useFrame } from "@react-three/fiber";

// Import React Three Drei components
import {
  useCursor,
  MeshPortalMaterial,
  Text,
  RoundedBox,
} from "@react-three/drei";

// Import Maath easing and geometry functions
import { easing, geometry } from "maath";

// Import Suspend React hook
import { suspend } from "suspend-react";

// Import Prop Types
import PropTypes from "prop-types";

// Extend the geometry module
extend(geometry);

// Import fonts
const regular = import(
  "../../../../assets/fonts/ArchitectsDaughter-Regular.woff"
);
const medium = import(
  "../../../../assets/fonts/ArchitectsDaughter-Regular.woff"
);

// Define the Portal component
const Portal = ({
  id,
  name,
  author,
  bg,
  width = 1,
  height = 1.6,
  givePortalId,
  changePortalId,
  children,
  ...props
}) => {
  // Create a ref to the portal mesh
  const portalRef = useRef();

  // Track the hover state of the portal
  const [hovered, hover] = useState(false);

  // Change the cursor on hover
  useCursor(hovered);

  // Use the useFrame hook to animate the portal
  useFrame((dt) =>
    easing.damp(
      portalRef.current,
      "blend",
      givePortalId === id ? 1 : 0,
      0.2,
      dt
    )
  );

  // Handle double click on the portal to navigate to that portal
  const handleDoubleClick = (e) => {
    e.stopPropagation();
    changePortalId(e.object.name);
  };

  // Return the Portal component
  return (
    <group {...props}>
      {/* Display the portal name */}
      <Text
        font={suspend(medium).default}
        fontSize={0.12}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 0.715, 0.1]}
        material-toneMapped={false}
      >
        {name}
      </Text>

      {/* Display the portal ID */}
      <Text
        font={suspend(regular).default}
        fontSize={0.12}
        anchorX="right"
        position={[0.4, -0.659, 0.1]}
        material-toneMapped={false}
      >
        /{id}
      </Text>

      {/* Display the portal author */}
      <Text
        font={suspend(regular).default}
        fontSize={0.1}
        anchorX="right"
        position={[0.0, -0.677, 0.1]}
        material-toneMapped={false}
      >
        {author}
      </Text>

      {/* Create the clickable portal */}
      <RoundedBox
        args={[width, height, 0.1]}
        name={id}
        onDoubleClick={handleDoubleClick}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <MeshPortalMaterial
          ref={portalRef}
          events={givePortalId === id}
          side={THREE.DoubleSide}
        >
          {/* eslint-disable-next-line react/no-unknown-property */}
          <color attach="background" args={[bg]} />
          {/* eslint-disable-next-line react/no-unknown-property */}
          <ambientLight intensity={1.5} />
          {children}
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

// Define the Portal prop types
Portal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  givePortalId: PropTypes.string,
  changePortalId: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

// Export the Portal component
export default Portal;

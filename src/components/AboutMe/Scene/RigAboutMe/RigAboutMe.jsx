import PropTypes from "prop-types";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

/**
 * Initializes the RigAboutMe component.
 *
 * @param {boolean} cameraActivated - Flag indicating if the camera is activated.
 * @param {function} cameraReset - Callback function to reset the camera.
 * @param {function} setCameraReset - Callback function to set the camera reset flag.
 * @return {JSX.Element} The rendered component.
 */
const RigAboutMe = ({ cameraActivated, cameraReset, setCameraReset }) => {
  const camRef = useRef();
  const [camPosition, setCamPosition] = useState(() =>
    window.innerWidth < 600 ? [30, 45, -5] : [20, 6, -20]
  );
  const [camTarget, setCamTarget] = useState(() =>
    window.innerWidth < 600 ? [5, 0, -6] : [5, 0, 0]
  );

  useEffect(() => {
/**
 * Handles the resize event and updates the camera position and target based on the value.
 *
 * @param {number} value - The value used to determine the new camera position and target.
 */
    const handleResize = (value) => {
      const newCamPosition = value < 600 ? [30, 45, -5] : [20, 6, -20];
      setCamPosition(newCamPosition);
      const newCamTarget = value < 600 ? [5, 0, -6] : [5, 0, 0];
      setCamTarget(newCamTarget);
    };

    window.addEventListener("resize", handleResize(window.innerWidth));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (cameraReset) {
      if (window.innerWidth < 600 ) {
        camRef.current.position.set(30, 45, -5);
        camRef.current.lookAt(5, 0, -6);
      } else {
        camRef.current.position.set(20, 6, -20);
        camRef.current.lookAt(5, 0, 0);
      }
      setCameraReset(false);
    }
  }, [cameraReset, setCameraReset]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={camRef}
        position={camPosition}
        fov={70}
      />
      <OrbitControls
        enabled
        camera={camRef.current}
        enablePan={cameraActivated}
        enableRotate={cameraActivated}
        enableZoom={cameraActivated}
        target={camTarget}
      />
    </>
  );
};

RigAboutMe.propTypes = {
  cameraActivated: PropTypes.bool,
  cameraReset: PropTypes.bool,
  setCameraReset: PropTypes.func,
};

export default RigAboutMe;

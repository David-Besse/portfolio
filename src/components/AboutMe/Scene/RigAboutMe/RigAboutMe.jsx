import PropTypes from "prop-types";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  const isNotMobile = useMediaQuery("only screen and (min-width : 1024px)");
  const [camPosition, setCamPosition] = useState(() =>
    window.innerWidth < 600 ? [30, 45, -5] : [20, 6, -20]
  );
  const [camTarget, setCamTarget] = useState(() =>
    window.innerWidth < 600 ? [5, 0, -6] : [5, 0, 0]
  );

  useEffect(() => {
    /**
     * Handles the resize event.
     *
     * @param {number} value - The value representing the width of the window.
     */
    const handleResize = (value) => {
      if (value < 600) {
        setCamTarget([5, 0, -6]);
        setCamPosition([30, 45, -5]);
        return;
      }

      const newCamTarget = isNotMobile ? [15, 0, 0] : [5, 0, 0];
      const newCamPosition = isNotMobile ? [-20, 6, -20] : [20, 6, -20];

      setCamTarget(newCamTarget);
      setCamPosition(newCamPosition);
    };

    window.addEventListener("resize", handleResize(window.innerWidth));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    /**
     * Resets the camera position based on the window width and device type.
     *
     * @return {void}
     */
    const resetCamera = () => {
      if (window.innerWidth < 600) {
        camRef.current.position.set(30, 45, -5);
      } else if (isNotMobile) {
        camRef.current.position.set(-20, 6, -20);
      } else {
        camRef.current.position.set(20, 6, -20);
      }
    };

    if (cameraReset) {
      resetCamera();
      setCameraReset(false);
    }
  }, [cameraReset, isNotMobile, setCameraReset]);

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

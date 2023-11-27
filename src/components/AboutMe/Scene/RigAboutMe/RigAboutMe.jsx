import PropTypes from "prop-types";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const RigAboutMe = ({ cameraActivated, cameraReset, setCameraReset }) => {
  const camRef = useRef();
  const [camPosition, setCamPosition] = useState(() =>
    window.innerWidth < 600 ? [30, 4, 10] : [20, 6, -20]
  );
  const [camTarget, setCamTarget] = useState(() =>
    window.innerWidth < 600 ? [0, 0, -0.5] : [5, 0, 0]
  );

  useEffect(() => {
    const handleResize = (value) => {
      const newCamPosition = value < 600 ? [30, 4, 10] : [20, 6, -20];
      setCamPosition(newCamPosition);
      const newCamTarget = value < 600 ? [0, 0, -0.5] : [5, 0, 0];
      setCamTarget(newCamTarget);
    };

    window.addEventListener("resize", handleResize(window.innerWidth));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (cameraReset) {
      if (window.innerWidth < 600) {
        camRef.current.position.set(30, 4, 10);
        camRef.current.lookAt(5, 0, 0);
      } else {
        camRef.current.position.set(20, 6, -20);
        camRef.current.lookAt(8, 5, 0);
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
}

export default RigAboutMe;

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";

const RigMySkills = () => {
    const camRef = useRef();
  
    return (
      <>
        <PerspectiveCamera
          ref={camRef}
          makeDefault
          position={[0, 0, 100]}
          fov={90}
          dpr={[1, 2]}
        />
        <OrbitControls
          camera={camRef.current}
          autoRotate
          autoRotateSpeed={0.7}
          enableZoom={false}
          target={[0, 0, 0]}
        />
      </>
    );
  };

  export default RigMySkills;
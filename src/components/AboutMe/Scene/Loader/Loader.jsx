import { useProgress } from "@react-three/drei";
import { Html } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();
  
    return (
      <Html className="absolute top-20 -left-20">
        Teleportation in progress... {Math.round(progress * 100) / 100} % finished
      </Html>
    );
  };

export default Loader;
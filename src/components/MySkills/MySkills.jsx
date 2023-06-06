import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";

const MySkills = () => {
  const { setSelectedSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setSelectedSection("mySkills");
  };

  return (
    <div id="mySkills" className="mySkills h-screen snap-center">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      My Skills
    </div>
  );
};

export default MySkills;

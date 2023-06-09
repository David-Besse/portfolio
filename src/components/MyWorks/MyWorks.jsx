import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";

const MyWorks = () => {
  const { setSelectedSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setSelectedSection("myWorks");
  };

  return (
    <div id="myWorks" className="myWorks h-screen snap-center bg-[#f3f2f9]">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      My Works
    </div>
  );
};

export default MyWorks;

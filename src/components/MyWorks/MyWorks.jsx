import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";

const MyWorks = () => {
  const { setCurrentSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setCurrentSection("myWorks");
  };

  return (
    <div id="myWorks" className="myWorks h-screen snap-center bg-[#f3f2f9]">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="95%" />
      My Works
    </div>
  );
};

export default MyWorks;

import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";

const MyProfile = () => {
  const { setSelectedSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setSelectedSection("myProfile");
  };

  return (
    <div id="myProfile" className="myProfile h-screen snap-center">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      My profile
    </div>
  );
};

export default MyProfile;

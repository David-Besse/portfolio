import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";

const Contact = () => {
  const { setSelectedSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setSelectedSection("contact");
  };

  return (
    <div id="contact" className="contact h-screen snap-center bg-red-200">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      Contact
    </div>
  );
};

export default Contact;

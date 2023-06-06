import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";

const Contact = () => {
  const { setSelectedSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setSelectedSection("contact");
  };

  return (
    <div id="contact" className="contact h-screen snap-center">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      Contact
    </div>
  );
};

export default Contact;

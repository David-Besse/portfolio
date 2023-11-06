import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import './myWorks.scss';

const MyWorks = () => {
  const { setCurrentSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setCurrentSection("myWorks");
  };

  return (
    <div id="myWorks" className="myWorks relative h-screen snap-center bg-[#f3f2f9]">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <h2 className="absolute top-2 left-2 h-[5%] text-2xl font-bold">
        .myWorks
      </h2>
      <div className="h-full w-full">
        <ul>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyWorks;

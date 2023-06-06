import { Waypoint } from "react-waypoint";
import { useStoreApp } from "../Store/app.store";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const MyWorks = () => {
  const setSelectedSection = useStoreApp((state) => state.setSelectedSection);

  const handleWaypointEnter = () => {
    setSelectedSection("myWorks");
  };

  return (
    <Section id="myWorks" className="myWorks">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      My Works
    </Section>
  );
};

export default MyWorks;

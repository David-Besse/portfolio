import { Waypoint } from "react-waypoint";
import { useStoreApp } from "../Store/app.store";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const MySkills = () => {
  const setSelectedSection = useStoreApp((state) => state.setSelectedSection);

  const handleWaypointEnter = () => {
    setSelectedSection("mySkills");
  };

  return (
    <Section id="mySkills" className="mySkills">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      My Skills
    </Section>
  );
};

export default MySkills;

import { Waypoint } from "react-waypoint";
import { useStoreApp } from "../Store/app.store";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const MyProfile = () => {
  const setSelectedSection = useStoreApp((state) => state.setSelectedSection);

  const handleWaypointEnter = () => {
    setSelectedSection("myProfile");
  };

  return (
    <Section id="myProfile" className="myProfile">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      My profile
    </Section>
  );
};

export default MyProfile;

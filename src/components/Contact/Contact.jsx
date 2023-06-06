import { Waypoint } from "react-waypoint";
import { useStoreApp } from "../Store/app.store";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Contact = () => {
  const setSelectedSection = useStoreApp((state) => state.setSelectedSection);

  const handleWaypointEnter = () => {
    setSelectedSection("contact");
  };

  return (
    <Section id="contact" className="contact">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      Contact
    </Section>
  );
};

export default Contact;

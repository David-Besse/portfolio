import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-color: #54bc54;
  scroll-snap-align: center;
`;

const MyProfile = () => {
  return <Section className="MyProfile">My profile</Section>;
};

export default MyProfile;

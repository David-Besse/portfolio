import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const MyProfile = () => {
  return <Section id="myProfile" className="myProfile">My profile</Section>;
};

export default MyProfile;

import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-color: #ae4dff;
  scroll-snap-align: center;
`;

const MyWorks = () => {
  return <Section className="MyWorks">My Works</Section>;
};

export default MyWorks;

import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-color: #fbd214;
  scroll-snap-align: center;
`;

const Home = () => {
  return <Section className="homePage">Home</Section>;
};

export default Home;

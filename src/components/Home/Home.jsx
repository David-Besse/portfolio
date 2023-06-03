import styled from "styled-components";
import Navbar from "./Navbar/navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Home = () => {
  return (
    <Section className="homePage">
      <Navbar />
    </Section>
  );
};

export default Home;

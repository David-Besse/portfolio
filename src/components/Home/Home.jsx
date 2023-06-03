import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Home = () => {
  return (
    <Section id="homePage" className="homePage">
      <Navbar />
    </Section>
  );
};

export default Home;

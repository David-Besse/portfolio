import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const MyWorks = () => {
  return <Section id="myWorks" className="myWorks">My Works</Section>;
};

export default MyWorks;

import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Contact = () => {
  return <Section id="contact" className="contact">Contact</Section>;
};

export default Contact;

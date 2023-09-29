import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd81;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
  z-index: 99;
`;

const Logo = styled.h2`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 55px;
`;

const Slogan = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 1em;
`;


const TopSection = () => {
    return (
        <TopSectionContainer>
            <Logo>Global Warning</Logo>
            <Slogan>Keep and stay cool</Slogan>
        </TopSectionContainer>
    )
};

export default TopSection;

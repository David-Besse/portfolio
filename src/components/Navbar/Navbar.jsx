import styled from "styled-components";

import { BsBook, BsEnvelopeAt, BsPerson, BsHouse, BsCodeSlash } from "react-icons/bs";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100vw;
  background-color: #white;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <nav className="fixed bottom-1 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-50">
            <ul className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] flex justify-around items-center text-2x1 text-white">
              <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <a href="#homePage">
                  <BsHouse size={30} />
                </a>
              </li>
              <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <a href="#myProfile">
                  <BsPerson size={30} />
                </a>
              </li>
              <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <a href="#myWorks">
                  <BsBook size={28} />
                </a>
              </li>
              <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <a href="#mySkills">
                  <BsCodeSlash size={30} />
                </a>
              </li>
              <li className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                <a href="#contact">
                  <BsEnvelopeAt size={30} />
                </a>
              </li>
            </ul>
        </nav>
      </Container>
    </Section>
  );
};

export default Navbar;

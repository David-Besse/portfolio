import styled from "styled-components";
import { Link } from "react-scroll";

import { BiHomeAlt } from "react-icons/bi";
import { BsClipboardData, BsChatSquareText } from "react-icons/bs";
import { TbNotebook } from "react-icons/tb";
import { SiAboutdotme } from "react-icons/si";
import Logo from "/logo.png";

import "./navbar.scss";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100vw;
  background-color: #white;
`;

const Links = styled.div`
  width: 70vw;
  background-color: #white;
`;

const Icons = styled.div`
  width: 70vw;
  background-color: #white;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <img src={Logo} alt="logo" className="myLogo" />
        </Links>
        <nav className="fixed bottom-2 left-2/4 transform -translate-x-2/4 -translate-y-2/4 lg:bottom-8 z-50">
          <div className="container mx-auto">
            <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white">
              <Link
                to="#homePage"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <BiHomeAlt size={20} />
              </Link>
              <Link
                to="#myProfile"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <SiAboutdotme size={20} />
              </Link>
              <Link
                to="#myWorks"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <BsClipboardData size={20} />
              </Link>
              {/* <Link
                to="portfolio"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <TbNotebook size={20} />
              </Link> */}
              <Link
                to="#contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <BsChatSquareText size={20} />
              </Link>
            </div>
          </div>
        </nav>
        <Icons></Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

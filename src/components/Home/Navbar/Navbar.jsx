import styled from 'styled-components';
import Logo from '/logo.png';

import './navbar.scss';

const Section = styled.div`
display: flex;
justify-content: center;
`;

const Container = styled.div`
width: 70vw;
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
            <Icons>

            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar;

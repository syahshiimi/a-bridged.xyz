import styled from "styled-components";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  display: flex;
  background: #e5e5e5;
  min-height: 100vh;
  max-width: 100vw;
  align-items: stretch;
  justify-items: center;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  text-align: center;
`;
const NavWrapper = styled.nav``;

const BodyWrapper = styled.article`
  max-width: 100vw;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 0vh 5vw;
  background: radial-gradient(
    41.63% 41.63% at 50% 50%,
    #eed202 0%,
    #e5e5e5 100%
  );
`;

const FooterWrapper = styled.footer``;

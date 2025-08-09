import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import Container from "./Container";
import Titles from "./Titles";
import { useNavigate } from "react-router-dom";
import Img from "./Img";

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;

  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  justify-content: center;
  align-items: center;
`;

function HeaderApp() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Container $layout="left">
        <FaArrowLeft
          onClick={() => navigate("/home")}
          style={{ width: "25px", height: "25px" }}
        />
      </Container>
      <Container $layout="center">
        <Titles as="h4">KapyKap Admin</Titles>
      </Container>
      <Container $layout="right">
        <Img
          src="https://firebasestorage.googleapis.com/v0/b/eleos-devlopers.appspot.com/o/kapykap%2FIMG_20241118_1309431.png?alt=media&token=0950880f-3f58-4f48-b471-ae4e5a02e795"
          alt="logo"
          $format="AppHeader"
        />
      </Container>
    </StyledHeader>
  );
}

export default HeaderApp;

import styled from "styled-components";
import Container from "./Container";
import Titles from "./Titles";
import Img from "./Img";
import useAuth from "../data/useAuth";
import Button from "./Button";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;

  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.8fr;
  justify-content: center;
  align-items: center;
`;

function HeaderApp() {
  const { userFrb, logOut } = useAuth();
  const handleLogOut = async () => {
    logOut();
  }
  return (
    <StyledHeader>
      <Container $layout="left">
        <IoMenu
          style={{ width: "25px", height: "25px" }}
        />
      </Container>
      <Container $layout="center">
        <Img
          src="https://firebasestorage.googleapis.com/v0/b/eleos-solutions.appspot.com/o/LOGO-sin-kike.png?alt=media&token=a0881d7f-1347-46d2-833d-28b01aa05776"
          alt="logo"
          $format="AppHeader"
        />
      </Container>
      <Container $layout="right">
        <Titles as="h5" style={{ fontWeight: "500" }}>
          Usuario: {userFrb?.email}
        </Titles>
        <Button $variation="icons" onClick={() => handleLogOut()}>
          <RiLogoutCircleLine />
        </Button>
      </Container>
    </StyledHeader>
  );
}

export default HeaderApp;

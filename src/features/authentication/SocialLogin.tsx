import styled from "styled-components";
import Titles from "../../ui/Titles";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../data/useAuth";

const StyledSocial = styled.div`
  margin: 0 auto;
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SocialLogin() {
	const navigate = useNavigate();
	const { googleSignIn } = useAuth();
	const [error, setError] = useState<string>("");
  const handleGoogle = async () => {
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    }
  };
  return (
    <StyledSocial>
      <Titles as="p" style={{ width: "100%", textAlign: "center" }}>
        O inicia sesión con
      </Titles>
      <Container $layout="spaceb">
        <Button $variation="socialButton" onClick={() => handleGoogle()}>
          <FcGoogle /> Continuar con Google
        </Button>
      </Container>
      <Titles as="h4">{error}</Titles>
    </StyledSocial>
  );
}

export default SocialLogin;

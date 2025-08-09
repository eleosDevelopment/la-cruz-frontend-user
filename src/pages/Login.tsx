import styled from "styled-components";
import EmailLogin from "../features/authentication/EmailLogin";
import Titles from "../ui/Titles";
import SocialLogin from "../features/authentication/SocialLogin";

const StyledLogin = styled.div`
  width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function Login() {
  return (
    <StyledLogin>
      <Titles as="h2" style={{ width: "100%", textAlign:"center" }}>
        Distribuidora La Cruz
      </Titles>
      <EmailLogin />
			<SocialLogin />
    </StyledLogin>
  );
}

export default Login;

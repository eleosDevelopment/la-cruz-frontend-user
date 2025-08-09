import styled from "styled-components";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useAuth from "../../data/useAuth";
import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import Container from "../../ui/Container";
import Titles from "../../ui/Titles";

const StyledEmail = styled.div`
  margin: 0 auto;
  width: 30%;
`;

function EmailLogin() {
  const [msg, setMsg] = useState<string>("Inicia Sesión");
  const [submit, setSubmit] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loginEmail } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setMsg("Iniciando Sesión...");
      setSubmit(true);
      await loginEmail(email, password);
      navigate("/home");
    } catch (error) {
      const errWithCode = error as { code: string; message: string };
      setMsg("Iniciar Sesión");
      setSubmit(false);
      if (errWithCode.code === "auth/invalid-email") {
        setError("Ingrese una dirección de correo electrónico válida");
      } else if (errWithCode.code === "auth/invalid-credential") {
        setError("La contraseña o el correo electrónico son incorrectos");
      } else if (errWithCode.code === "auth/missing-password") {
        setError("Ingrese una contraseña valida");
      } else if (errWithCode.code === "auth/user-not-found") {
        setError("Correo electrónico no se encontro");
      }
    }
  };

  return (
    <StyledEmail>
      <Form $type="modal" onSubmit={handleLogin}>
        <FormRowVertical label="Correo Electrónico">
          <Input
            $layout="formType"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical label="Contraseña">
          <Input
            $layout="formType"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRowVertical>
        <Button
          type="submit"
          $variation="submit"
          style={{
            margin: "10px auto",
            padding: "5px 20px",
            fontSize: "1rem",
            color: "var(--color-prussian-blue)",
          }}
					disabled={submit}
        >
          {msg}
        </Button>
      </Form>
      <Container>
        <Titles as="p">{error}</Titles>
      </Container>
    </StyledEmail>
  );
}

export default EmailLogin;

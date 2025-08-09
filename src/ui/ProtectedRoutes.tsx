import { useNavigate } from "react-router-dom";
import useAuth from "../data/useAuth";
import { useEffect } from "react";
import styled from "styled-components";
import Titles from "./Titles";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-600);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { loader, userFrb } = useAuth();

  useEffect(
    function () {
      if (!userFrb && !loader) navigate("/");
    },
    [userFrb, loader, navigate]
  );

  if (loader)
    return (
      <FullPage>
        <Titles as="h3">Loading data...</Titles>
      </FullPage>
    );
  if (userFrb) return children;
}

export default ProtectedRoutes;

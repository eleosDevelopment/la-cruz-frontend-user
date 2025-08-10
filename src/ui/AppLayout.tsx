import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderApp from "./HeaderApp";

const StyledLayout = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MainContent = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 50px auto;

  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-grey-100);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-300);
    border-radius: 5px;
  }
`;

function AppLayout() {
  return (
    <StyledLayout>
      <HeaderApp />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledLayout>
  );
}

export default AppLayout;

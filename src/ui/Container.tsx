import styled, { css } from "styled-components";

interface ContainerProps {
  $layout?: "center" | "left" | "right" | "spaceb";
}

const Container = styled.div<ContainerProps>`
  ${({ $layout }) => {
    switch ($layout) {
      case "center":
        return css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        `;
      case "left":
        return css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
        `;
      case "right":
        return css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
        `;
      case "spaceb":
        return css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        `;
    }
  }}
`;

export default Container;

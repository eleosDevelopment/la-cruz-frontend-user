import type { ReactNode } from "react";
import styled, { css } from "styled-components";

interface TitlesProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
  children?: ReactNode;
}

const Titles = styled.h1<TitlesProps>`
  line-height: 1.2;
  ${({ as }) =>
    as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      margin: 0px;
      padding: 0px;
    `}
  ${({ as }) =>
    as === "h2" &&
    css`
      font-size: 2rem;
      margin: "5px 0px";
      padding: 0px;
    `}
    
  ${({ as }) =>
    as === "h3" &&
    css`
      font-size: 1.5rem;
      margin: "5px 0px";
      padding: 0px;
    `}
    
  ${({ as }) =>
    as === "h4" &&
    css`
      font-size: 1.25rem;
      margin: "5px 0px";
      padding: 0px;
    `}

  ${({ as }) =>
    as === "h5" &&
    css`
      font-size: 1rem;
      margin: "5px 0px";
      padding: 0px;
    `}

  ${({ as }) =>
    as === "p" &&
    css`
      font-size: 0.9rem;
      margin: "5px 0px";
      padding: 0px;
    `}
`;

export default Titles;

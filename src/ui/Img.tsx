import styled, { css } from "styled-components";

interface ImgProps {
  $format?:
    | "logoLogin"
    | "logoHeader"
    | "AppHeader"
    | "uploadImage"
    | "productCard";
}

const Img = styled.img<ImgProps>`
  ${({ $format }) => {
    switch ($format) {
      case "logoLogin":
        return css`
          width: 125px;
          height: 125px;
          object-fit: cover;
        `;
      case "logoHeader":
        return css`
          width: 90px;
          height: 90px;
          object-fit: cover;
        `;
      case "AppHeader":
        return css`
          width: 150px;
          height: 60px;
          object-fit: cover;
        `;
      case "uploadImage":
        return css`
          width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 10px;
          margin: 0 auto;
        `;
      case "productCard":
        return css`
          width: 75px;
          height: 75px;
          object-fit: cover;
          object-position: center;
        `
    }
  }}
`;
export default Img;

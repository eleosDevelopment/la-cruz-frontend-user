import styled from "styled-components";
import Titles from "../../ui/Titles";

const StyledMain = styled.div`
  width: 100%;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/eleos-solutions.appspot.com/o/Lucid_Origin_Crea_una_imagen_vibrante_y_atractiva_que_contenga_2%20(1)%20(1).jpg?alt=media&token=f399eaec-314a-4e7d-bd02-690d9158a501");
  border-radius: 10px;
`;

const ContentDiv = styled.section`
  width: 100%;
  height: 500px;
  color: var(--color-white-smoke);
  background-image: linear-gradient(250deg, transparent 5%, black);
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MainSection() {
  return (
    <StyledMain>
      <ContentDiv>
        <Titles as="h1" style={{ width: "100%", margin: "0px" }}>
          ¡Comprá en línea y Ahorrá a lo grande!
        </Titles>
        <Titles as="p" style={{ width: "100%", margin: "10px 0px 0px" }}>
          +3000 Productos de la Canasta Básica, Confites Mexicanos, Artículos
          para Fiestas y mucho más!
        </Titles>
      </ContentDiv>
    </StyledMain>
  );
}

export default MainSection;

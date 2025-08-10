import styled from "styled-components";

import { GrCatalog } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";

import Titles from "../../ui/Titles";

const StyledMenu = styled.div`
  width: 70%;
  margin: 30px auto 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ContainerMenu = styled.div`
  width: 30%;
  padding: 20px 0px;

	background-color: var(--color-grey-800);
  border: 2px solid var(--color-orange);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

	& svg {
		color: var(--color-sky-blue);
		width: 50px;
		height: 50px;
		margin: 5px 0px 10px;
	}

	cursor: pointer;
`;

function MenuSection() {
  return (
    <StyledMenu>
      <ContainerMenu>
        <GrCatalog />
        <Titles as="h3" style={{ margin: "0px" }}>
          Ver Nuestro catalago
        </Titles>
      </ContainerMenu>
      <ContainerMenu>
        <FaCartShopping />
        <Titles as="h3" style={{ margin: "0px" }}>
          Ordenar en linea
        </Titles>
      </ContainerMenu>
      <ContainerMenu>
        <FaRegListAlt />
        <Titles as="h3" style={{ margin: "0px" }}>
          Ver mis ordenes
        </Titles>
      </ContainerMenu>
    </StyledMenu>
  );
}

export default MenuSection;

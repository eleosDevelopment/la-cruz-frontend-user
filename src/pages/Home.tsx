import styled from "styled-components";
import MainSection from "../features/home/MainSection";
import MenuSection from "../features/home/MenuSection";

const StyledHome = styled.div`
	width: 100%;
`

function Home () {
	return (
		<StyledHome>
			<MainSection />
			<MenuSection />
		</StyledHome>
	)
}

export default Home;
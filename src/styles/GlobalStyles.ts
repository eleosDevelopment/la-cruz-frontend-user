import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
	/**MAIN COLORS**/
	--color-prussian-blue: #003049;
	--color-white-smoke: #f5f5f5;
	--color-fire-red: #d62828;
	--color-orange: #f77f00;
	--color-vanilla: #eae2b7;
	/*GREY COLORS*/
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

	/*BODY SETTINGS*/
	body {
		font-family: 'Roboto', sans-serif;
		color: var(--color-white-smoke);
		font-weight: 500;
		font-size: 1.1rem;

		width: 95vw;
		height: 100vh;
		margin: 0 auto;
		
		background-color: var(--color-prussian-blue);
		transition: all 0.5s, color 0.3s, background-color 0.3s;
		line-height: 1.5;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smothing: antialiased;
		-moz-osx-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;

		overflow-y: scroll;
 		overflow-x: hidden;
  	&::-webkit-scrollbar {
    	width: 10px;
  	}

  	&::-webkit-scrollbar-track {
    	background: var(--color-prussian-blue);
    	border-radius: 5px;
  	}

  	&::-webkit-scrollbar-thumb {
    	background: var(--color-vanilla);
    	border-radius: 5px;
  	}
	}
	.isHidden {
		display: none;
	}
}
`;
export default GlobalStyles;

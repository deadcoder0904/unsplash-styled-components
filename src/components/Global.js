import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html, body {
		height: 100vh;
		max-width: 100%;
		font-size: 62.5%;
		background-color: ${props => props.theme.bgColor};
		color: ${props => props.theme.color};
		font-family: ${props => props.theme.fontFamily};
	}
`

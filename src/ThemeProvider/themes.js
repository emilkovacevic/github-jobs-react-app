import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#d1e8e2",
  fontColor: "#116466",
  button: "#2C3531"
};

export const darkTheme = {
  body: "#2c3531",
  fontColor: "#FFCB9A",
  button: "#D9b08C"
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;

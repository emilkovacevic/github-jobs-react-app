import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#eff0f3",
  appBg: "white",
  fontColor: "#2B8FD4",
  button: {
    background: "none",
    text: "black",
    hover: 'red'
  },
  footer: {
    background: "#474747",
    color:"white"
  },
  label: {
    color: 'white'
  },
  input: {
    color: 'black'
  },
  a:{
    color: 'white',
  },
  nav: {
    background: "gray",
    color: "#a3abb8",
  },
  p: "black",
  heading: "black",
  span: "black",
};

export const darkTheme = {
  body: "#1f2833",
  appBg: "gray",
  fontColor: "#FFCB9A",
  button: {
    background: "none",
    text: "#66fcf1",
    hover: 'yellow'
  },
  footer: {
    background: "#474747"
  },
  label: {
    color: 'white'
  },
  input: {
    color: 'white'
  },
  a:{
    color: 'white',
  },
  nav: {
    background: "#3b4a5c",
    color: "red"
  },
  p: "whitesmoke",
  heading: "whitesmoke",
  span: "whitesmoke"
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

  button {
    background: ${(props) => props.theme.button.background};
    color: ${(props) => props.theme.button.text};
  }

  p {color: ${(props) => props.theme.p};}
  #Navbar{
    background: ${(props) => props.theme.nav.background};
  }

  nav {
    color: ${(props) => props.theme.nav.text};
  }
  h2 {
    color: ${(props) => props.theme.heading}
  }
  h3 {
    color: ${(props) => props.theme.heading}
  }
  a {
    color: ${(props) => props.theme.p}
  }
  span {
    color: ${(props) => props.theme.span}
  }
`;

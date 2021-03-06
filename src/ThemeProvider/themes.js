import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#eff0f3",
  appBg: "white",
  fontColor: "#2B8FD4",
  info:"black",
  openCard: "whitesmoke",
  button: {
    background: "none",
    text: "black",
    hover: 'green'
  },
  footer: {
    background: "gray",
    color: "white"
  },
  label: {
    color: 'white'
  },
  input: {
    color: 'black'
  },
  a: {
    color: 'white',
  },
  nav: {
    background: "gray",
    color: "#a3abb8",
  },
  p: "black",
  li: "black",
  heading: "whitesmoke",
  span: "black"
};

export const darkTheme = {
  body: "#1f2833",
  appBg: "#383838",
  fontColor: "#FFCB9A",
  openCard: "66fcf1",
  button: {
    background: "none",
    text: "#66fcf1",
    hover: 'yellow'
  },
  info:"#67aba5",
  footer: {
    background: "#3b4a5c"
  },
  label: {
    color: 'white'
  },
  input: {
    color: 'white'
  },
  a: {
    color: 'white',
  },
  nav: {
    background: "#3b4a5c",
    color: "blue"
  },
  p: "whitesmoke",
  li: "whitesmoke",
  heading: "whitesmoke",
  span: "whitesmoke",
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
    color: ${(props) => props.theme.a}
  }
  span {
    color: ${(props) => props.theme.span}
  }
`;

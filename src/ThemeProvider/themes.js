import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#eff0f3",
  fontColor: "#2B8FD4",
  button: {
    background: "none",
    text:"black",
    hover: 'red'
  },
  label:{
    color: 'black'
  },
  input:{
    color: 'black'
  },
  nav:{
    background: "#fefefe",
    color: "#a3abb8",
  },
  a:{
    color: "blue",
    hover: "green"
  },
  p:"black",
  heading: "black",
  span:"black",
};

export const darkTheme = {
  body: "#1f2833",
  fontColor: "#FFCB9A",
  button: {
    background: "none",
    text:"#66fcf1",
    hover: 'yellow'
  },
  label:{
    color: 'white'
  },
  input:{
    color: 'white'
  },
  nav:{
    background: "#3b4a5c",
    color: "red"
  },
  a:{
    color: "#66fcf1",
    hover: "red"
  },
  p:"whitesmoke",
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
  h1 {color: ${(props)=> props.theme.heading}};
  span {color: ${(props) => props.theme.span}}
`;

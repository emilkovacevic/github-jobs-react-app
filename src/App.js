import {useState, useEffect} from 'react'

import useFetchGithubJobs from './dependencies/useFetchGithubJobs'
import JobCard from './components/JobsCard'
import Navbar from './components/Navbar'

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./ThemeProvider/themes";


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Main = styled.main``

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error} = useFetchGithubJobs()

  // THEME HANDLER
  const [isTheme, setTheme] = useState("light");
  useEffect(() => {
    const storageTheme = localStorage.getItem("colorTheme");
    if (storageTheme) {
     ( storageTheme === "light")
        ? setTheme("light")
        : setTheme("dark");
    } else {
      setTheme("light");
      localStorage.setItem("colorTheme", "light");
    }
  }, []);

const handleThemeSwitch = () => {

    if (isTheme === "light") {
      setTheme("dark");
      localStorage.setItem("colorTheme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("colorTheme", "light");
    }
  };

  return (
    <ThemeProvider theme={isTheme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
      <Navbar  handleThemeSwitch={handleThemeSwitch}>
      </Navbar>
      <Main>
        {loading && <p>loading</p>}
        {error && <p>error</p>}
        {
          jobs.map(job => {
            return <JobCard key={job.id} job={job}/>
          })
        }
      </Main>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

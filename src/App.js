import {useState, useEffect} from 'react'

import useFetchGithubJobs from './dependencies/useFetchGithubJobs'
import JobCard from './components/JobsCard'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'


import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./ThemeProvider/themes";


const StyledApp = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1em;
  height: 1600px;
`;

const Main = styled.main`
article{
  color: ${props => props.theme.p};
  margin:2em 0;
  text-align:center;
}
.github-link{
  color:red;
  padding:0 1em;
}
`

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchGithubJobs()

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

  // navbar input handler
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <ThemeProvider theme={isTheme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
      <Navbar 
      handleThemeSwitch={handleThemeSwitch}
      params={params} 
      onParamChange={handleParamChange}
      />
      <Main>
      <article>
        <h1>React Project by Emil Kovacevic</h1>
        <p>This website uses github jobs api</p>
        <div>
          <p>Source code: 
            <a href="https://github.com/emilkovacevic/github-jobs-react-app">
            <span className='github-link'>HERE</span>
            </a>
          </p>
        </div>
      </article>
      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        {loading && <p>loading</p>}
        {error && <p>error</p>}
        {
          jobs.map(job => {
            return <JobCard key={job.id} job={job}/>
          })
        }
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      </Main>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

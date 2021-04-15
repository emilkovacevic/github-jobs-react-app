import { useState, useEffect } from 'react'
import useFetchGithubJobs from './fetch/useFetchGithubJobs'

import Error from './components/Error'
import Loading from './components/Loading'

import JobCard from './components/JobsCard'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import PageInfo from './components/PageInfo'
import Footer from './components/Footer'

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./ThemeProvider/themes";


const StyledApp = styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background: ${props => props.theme.appBg};
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1em;
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
  const { jobs, loading, error, hasNextPage } = useFetchGithubJobs(params, page)

  // THEME HANDLER
  const [isTheme, setTheme] = useState("light");
  useEffect(() => {
    const storageTheme = localStorage.getItem("colorTheme");
    if (storageTheme) {
      (storageTheme === "light")
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
          <PageInfo/>
          {!error && !loading ? <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> : null}

          {loading && <Loading />}
          {error && <Error/>}
          <div>
              {jobs.map(job => {
                return <JobCard key={job.id} job={job} />
              })}
          </div>

          {!error && !loading ? <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> : null}
        </Main>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

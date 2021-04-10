import {useState} from 'react'
import styled from 'styled-components'

import useFetchGithubJobs from './dependencies/useFetchGithubJobs'
import JobCard from './components/JobCard'

const AppContainer = styled.div`

`
const Header = styled.header``
const Main = styled.main``

function App() {

  const [colorTheme, setColorTheme] = useState('app-light')
  const handleTheme = (e) =>{
    e.preventDefault()
    if(colorTheme === 'app-light') setColorTheme('app-dark')
    else setColorTheme('app-light')
  }

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error} = useFetchGithubJobs()

  return (
    <AppContainer className={colorTheme}>
      <Header>
        <button onClick={handleTheme}>theme</button>
      </Header>
      <Main>
        {loading && <p>loading</p>}
        {error && <p>error</p>}
        {
          jobs.map(job => {
            return <JobCard key={job.id} job={job}/>
          })
        }
      </Main>
    </AppContainer>
  );
}

export default App;

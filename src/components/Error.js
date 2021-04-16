import React from 'react'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
h2, h4, p, li, a{
    color: ${props => props.theme.p}
}

`

function Error() {
    return (
        <ErrorWrapper style={{maxHeight:"fit-content", margin:"auto"}}>
            <h2 style={{textAlign:"center", color:'#9e3143'}}>Error: failed to display jobs</h2>
            <br/>
            <div style={{margin:"0 auto", maxWidth:"fit-content"}}>
            <h4>- If you are running the website on localhost,<br/> Try the following:</h4>
            <ol style={{margin:"1em 3em"}}>
                <li>Go to the fetch/useFetchGithubJobs.js file in the project structure 
                <br/>and swap the links on the BASE_URL</li>
                <li>request temporary access to the demo server <a href='https://cors-anywhere.herokuapp.com/corsdemo' target="_blank" rel="noreferrer">HERE</a></li>
                <li>Return back to this site</li>
                <li>Refresh the page a few times</li>
                <li>Job listing should work now</li>
            </ol>
            <h4>- If you are are visiting a hosted site:</h4>
            <ol style={{margin:"1em 3em"}}>
                <li>I AM WORKING ON IT</li>
                <li>Contact me at 
                    <ul>
                        <li><a href="mailto:emil.kovacevic.dev@gmail.com" >MAIL</a></li>
                        <li><a href="https://emilkovacevic.com/" >Visit my portfolio vebsite</a></li>
                    </ul>
                </li>
            </ol>
            </div>
            <br/>
            <p style={{textAlign:"center"}}>Sorry for the inconvenience</p>
        </ErrorWrapper>
    )
}

export default Error

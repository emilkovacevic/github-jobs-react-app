import React from 'react'

function Error() {
    return (
        <div style={{maxHeight:"fit-content", margin:"auto"}}>
            <h2 style={{textAlign:"center", color:'#9e3143'}}>Error: failed to display jobs</h2>
            <br/>
            <div style={{margin:"0 auto", maxWidth:"fit-content"}}>
            <h4>- If you are running the website on localhost,<br/> Try the following:</h4>
            <ol style={{margin:"1em 3em"}}>
                <li>Go to the fetch/useFetchGithubJobs.js file in the project structure 
                <br/>and swap the links on the BASE_URL</li>
                <li>request temporary access to the demo server<a href='https://cors-anywhere.herokuapp.com/corsdemo' target="_blank" rel="noreferrer">HERE</a></li>
                <li>Return back to this site</li>
                <li>Refresh the page a few times</li>
                <li>Job listing should work now</li>
            </ol>
            <h4>- If you are are visiting a hosted site:</h4>
            <ol style={{margin:"1em 3em"}}>
                <li>Report the problem on my <a href="mailto:emil.kovacevic.dev@gmail.com" >MAIL</a></li>
            </ol>
            </div>
            <br/>
            <p style={{textAlign:"center"}}>Sorry for the inconvenience</p>
        </div>
    )
}

export default Error

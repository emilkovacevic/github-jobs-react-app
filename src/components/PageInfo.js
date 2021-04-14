import React from 'react'

function PageInfo() {
    return (
      <div>
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
      <article>
        <h2>IMPORTANT</h2>
        <p>If you are running this project on localhost visit <br/>
           <a href="https://cors-anywhere.herokuapp.com/corsdemo">THIS LINK</a> <br/>
           and click on request temporary acces to demo server</p>
      </article>
      </div>
    )
}

export default PageInfo

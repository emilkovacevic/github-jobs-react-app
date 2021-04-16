import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-top: 1em;
padding: 1em;
background:${props => props.theme.footer.background};
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;
li{
    list-style-type: none;
}
h2{
    color:${props => props.theme.footer.color};
    text-transform:uppercase;
}
.articles{
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    justify-content:space-between;
    article{
        padding:1em;
        p, h2{
            color:${props => props.theme.footer.color};
            text-transform: unset;
        }
        p{
            padding:10px 0;
            border-bottom: 1px solid ${props => props.theme.appBg}
        }
    }
}
i{
    color:red;
}
a{
    color:${props => props.theme.p};
}

`

function Footer() {
    return (
        <Container>
            <div>
                <h2>Thanks for visiting</h2>
                <div className="articles">
                <article>
                    <h3>This website uses github jobs api</h3>
                    <div>
                        <p>SOURCE CODE
                            <a href="https://github.com/emilkovacevic/github-jobs-react-app">
                                
                                <span className='github-link'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> HERE</span>
                            </a>
                        </p>
                    </div>
                </article>
                </div>
            </div>
            <ul>
                <li><a href="https://github.com/emilkovacevic">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Github</a></li>
                <li><a href="https://emilkovacevic.com/">Portfolio website</a></li>
            </ul>
        </Container>
    )
}

export default Footer

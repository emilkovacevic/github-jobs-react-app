import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-top: 1em;
padding: 1em;
background:${props => props.theme.footer.background};
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;
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
a,span{
    color: #4d8bc9;
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
                        <p>Source code is
                            <a href="https://github.com/emilkovacevic/github-jobs-react-app">
                                <span className='github-link'> HERE</span>
                            </a>
                        </p>
                    </div>
                </article>
                </div>
            </div>
            <ul>
                <li><a href="https://github.com/emilkovacevic">Github</a></li>
                <li><a href="https://emilkovacevic.com/">portfolio website</a></li>
            </ul>
        </Container>
    )
}

export default Footer

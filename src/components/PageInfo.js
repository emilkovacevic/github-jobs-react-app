import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  text-align:center;
  h1{
    margin-top:1em;
    color: ${props => props.theme.nav.background};}
`

function PageInfo() {
    return (
      <Header>
        <h1>React Project with github job api</h1>
      </Header>
    )
}

export default PageInfo

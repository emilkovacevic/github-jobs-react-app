import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
width:fit-content;
margin:1em 0;
margin:auto;
margin-right:0;
padding:0.5em 1em;
color: ${props => props.theme.p};
border: 1px solid ${props => props.theme.p};
display:flex;
justify-content:center;
div, button{
  padding:10px;
}
.activePage{
  color: ${props => props.theme.body};
  font-weight: 700;
}
`

export default function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <Component>
      {page !== 1 && <button onClick={() => adjustPage(-1)} >prev</button>}
      {page !== 1 && <div onClick={() => setPage(1)}>1</div>}
      {page > 2 && <div/>}
      {page > 2 && <div onClick={() => adjustPage(-1)}>{page - 1}</div>}
      <div className="activePage">{page}</div>
      {hasNextPage && <button onClick={() => adjustPage(1)}>{page + 1}</button>}
      {hasNextPage && <button onClick={() => adjustPage(1)} >next</button>}
    </Component>
  )
}
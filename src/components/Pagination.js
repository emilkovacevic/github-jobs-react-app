import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
width:fit-content;
margin:auto;
margin-top:2em;
margin-right:0;
padding:0 1em;
color: ${props => props.theme.p};
display:flex;
justify-content:center;
align-items:center;
border-bottom: 1px solid ${props => props.theme.p};
div, button{
  margin:10px;
  font-size:16px;
  cursor: pointer;
  color: blue;
}
.activePage{
  color: ${props => props.theme.p};
  font-size:20px;
  cursor: default;
}
`

export default function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <Component>
      {page !== 1 && <button onClick={() => adjustPage(-1)} >PREV</button>}
      {page !== 1 && <div onClick={() => setPage(1)}>1</div>}
      {page > 2 && <div onClick={() => adjustPage(-1)}>{page - 1}</div>}
      <div className="activePage">{page}</div>
      {hasNextPage && <button onClick={() => adjustPage(1)}>{page + 1}</button>}
      {hasNextPage && <button onClick={() => adjustPage(1)} >NEXT</button>}
    </Component>
  )
}
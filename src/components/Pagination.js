import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
width:fit-content;
padding:0.5em 1em;
margin: 1em;
border-radius:25%;
color: ${props => props.theme.p};
border: 1px solid ${props => props.theme.p};
`

export default function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <Component>
      {page !== 1 && <button onClick={() => adjustPage(-1)} />}
      {page !== 1 && <div onClick={() => setPage(1)}>1</div>}
      {page > 2 && <div/>}
      {page > 2 && <div onClick={() => adjustPage(-1)}>{page - 1}</div>}
      <div>{page}</div>
      {hasNextPage && <button onClick={() => adjustPage(1)}>{page + 1}</button>}
      {hasNextPage && <button onClick={() => adjustPage(1)} />}
    </Component>
  )
}
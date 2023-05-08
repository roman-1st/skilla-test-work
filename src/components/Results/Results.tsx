import React from 'react'
import styled from 'styled-components'

const ResultContainer = styled.div`
    position: absolute ;
    top: 64px;
    left: 240px;
    width: 1680px;
    height: 2666px;
    background: #F1F4F9;
`

function Results() {
  return (
    <ResultContainer>
      <p> Result </p>
    </ResultContainer>
  )
}

export default Results
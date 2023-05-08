import React from 'react'
import styled from 'styled-components'

const ReportsContainer = styled.div`
    position: absolute ;
    top: 64px;
    left: 240px;
    width: 1680px;
    height: 2666px;
    background: #F1F4F9;
`

function Reports() {
  return (
    <ReportsContainer>
      <p> Reports </p>
    </ReportsContainer>
  )
}

export default Reports
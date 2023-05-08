import React from 'react'
import styled from 'styled-components'

const MessagesContainer = styled.div`
    position: absolute ;
    top: 64px;
    left: 240px;
    width: 1680px;
    height: 2666px;
    background: #F1F4F9;
`

function Messages() {
  return (
    <MessagesContainer>
      <p> Messages </p>
    </MessagesContainer>
  )
}

export default Messages
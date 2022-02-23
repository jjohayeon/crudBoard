import React from 'react'
import styled from 'styled-components'

const MainPage = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function main() {
  return (
    <div>
      <MainPage>
        <h1>MainPage</h1>
      </MainPage>
    </div>
  )
}

import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000;
  color: white;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 30px;
    margin: 0 100px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    li {
      color: #fff;
      list-style-type: none;
    }
  }
`

const Header = () => {
  return (
    <div>
      <HeaderBox>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </HeaderBox>
    </div>
  )
}

export default Header

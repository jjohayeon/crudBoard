import React, { useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const WriteBox = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 600px;
    height: 50px;
    margin: 30px 0;
    padding: 0 20px;
  }
  textarea {
    width: 600px;
    height: 300px;
    padding: 20px;
  }
  button {
    padding: 15px 40px;
    margin-top: 30px;
  }
`

const write = ({ title, setTitle, contents, setContents }) => {
  const submit = () => {
    Axios.post('http://localhost:3001/api/insert', {
      title: title,
      contents: contents,
    }).then(() => {
      console.log('success!')
    })
  }
  return (
    <div className="container">
      <WriteBox>
        <h1>글쓰기페이지</h1>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        ></input>
        <textarea
          placeholder="contents"
          onChange={(e) => {
            setContents(e.target.value)
          }}
        ></textarea>
        <button onClick={submit}>Submit</button>
      </WriteBox>
    </div>
  )
}

export default write

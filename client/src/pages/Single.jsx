import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Axios from 'axios'

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  h1 {
    margin-bottom: 50px;
  }

  .detailBox {
    width: 600px;
    height: 400px;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
      padding: 10px 20px;
      background: #000;
      border: none;
      color: #fff;
      cursor: pointer;
      margin: 10px;
    }
  }
`

const UpdateModal = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .modalBox {
    width: 800px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    h2,
    label {
      color: #fff;
    }
    h2 {
      margin: 20px 0;
    }
  }
  input {
    width: 80%;
    padding: 20px 20px;
  }
  textarea {
    width: 80%;
    height: 300px;
    resize: none;
    padding: 20px;
  }
  button {
    padding: 10px 20px;
    background: #fff;
    border: none;
    color: #000;
    cursor: pointer;
    margin: 10px;
    margin-top: 20px;
  }
`

const Single = ({
  list,
  deleteDetail,
  setCurrentId,
  setTitle,
  setContents,
  title,
  contents,
  setNewTitle,
  setNewCont,
}) => {
  const modalRef = useRef(null)
  const { id } = useParams()

  let listId = list.find(function (a) {
    return a.id == id
  })
  setCurrentId(listId)

  const modalOpen = () => {
    modalRef.current.style = 'display: block'
  }
  // const update = async () => {
  //   let params = {
  //     id: currentId,
  //     title: title,
  //     contents: contents,
  //   }
  //   try {
  //     const res = await Axios.put('http://localhost:3001/api/update', params)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const update = (e) => {
    if (window.confirm('업뎃?'))
      Axios.put('http://localhost:3001/api/update', {
        id: listId,
        title: title,
        contents: contents,
      }).then(console.log('success'))
  }

  return (
    <div>
      <Detail>
        <h1>SinglePage</h1>
        <div className="detailBox">
          <h2>{listId?.title}</h2>
          <p>{listId?.contents}</p>
          <div>
            <button onClick={modalOpen}>수정</button>
            <button
              onClick={() => {
                deleteDetail()
              }}
            >
              삭제
            </button>
          </div>
        </div>
      </Detail>
      <UpdateModal ref={modalRef}>
        <div className="modalBox">
          <h2>수정페이지</h2>
          <label>Title</label>
          <input
            type="text"
            defaultValue={listId?.title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <label>contents</label>
          <textarea
            defaultValue={listId?.contents}
            onChange={(e) => {
              setContents(e.target.value)
            }}
          ></textarea>
          <div>
            <button onClick={() => update()}>수정완료</button>
            <button
              onClick={() => {
                modalRef.current.style = 'display:none'
              }}
            >
              닫기
            </button>
          </div>
        </div>
      </UpdateModal>
    </div>
  )
}

export default Single

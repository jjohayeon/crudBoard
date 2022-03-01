import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";

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
`;

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
`;

const Single = ({
  list,
  deleteDetail,
  setCurrentId,
  setTitle,
  setContents,
}) => {
  const modalRef = useRef(null);
  const { id } = useParams();

  let listId = list.find(function (a) {
    return a.id == id;
  });
  setCurrentId(listId);

  const modalOpen = () => {
    modalRef.current.style = "display: block";
  };

  const [newTitle, setNewTitle] = useState("");
  const [newCont, setNewCont] = useState("");

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
                deleteDetail();
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
            value={listId?.title}
            onChange={(e) => {
              setNewTitle(e.target.value);
              console.log(newTitle);
            }}
          />
          <label>contents</label>
          <textarea value={listId?.contents}></textarea>
          <div>
            <button>초기화</button>
            <button>수정완료</button>
            <button
              onClick={() => {
                modalRef.current.style = "display:none";
              }}
            >
              닫기
            </button>
          </div>
        </div>
      </UpdateModal>
    </div>
  );
};

export default Single;

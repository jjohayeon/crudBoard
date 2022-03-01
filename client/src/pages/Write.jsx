import React, { useRef } from "react";
import styled from "styled-components";
import Axios from "axios";
import { useHistory } from "react-router-dom";

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
    resize: none;
  }
  button {
    padding: 15px 40px;
    margin-top: 30px;
  }
`;
const Modal = styled.div`
  display: none;
  width: 300px;
  height: 150px;
  background: pink;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  h2 {
    text-align: center;
    margin: 30px 0;
  }
  button {
    padding: 5px 10px;
  }
`;

const Write = ({ title, setTitle, contents, setContents, setList }) => {
  const modalRef = useRef(null);
  const history = useHistory();

  const submit = () => {
    Axios.post("http://localhost:3001/api/insert", {
      title: title,
      contents: contents,
    })
      .then(() => {
        console.log("success!");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(modalRef.current);
    modalRef.current.style = "display: block";
    setTimeout(() => {
      window.location.replace("/list");
    }, 2000);
  };
  return (
    <div className="container">
      <WriteBox>
        <h1>글쓰기페이지</h1>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <textarea
          placeholder="contents"
          onChange={(e) => {
            setContents(e.target.value);
          }}
        ></textarea>
        <button onClick={submit}>Submit</button>
      </WriteBox>
      <Modal ref={modalRef}>
        <h2>저장되었습니당</h2>
        <button
          onClick={() => {
            modalRef.current.style = "display: none";
            window.location.replace("/list");
          }}
        >
          닫기
        </button>
      </Modal>
    </div>
  );
};

export default Write;

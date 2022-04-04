import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Main from "./pages/Main";
import Write from "./pages/Write";
import List from "./pages/List";
import Single from "./pages/Single";
import Axios from "axios";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  .container {
    width:90%;
    margin:0 auto;
  }
`;
function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [list, setList] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  //페이지네이션 state
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1); //현재 페이지 번호
  const offset = (page - 1) * limit;

  const deleteDetail = (e) => {
    if (window.confirm("삭제할건가용?"))
      Axios.delete("http://localhost:3001/api/delete/", {
        data: currentId,
      });
    window.location.replace("/list");
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setList(response.data);
    });
  }, []);

  //useEffect(()=>{
  //fetch("http://localhost:3001/api/delete/").then((res)=>{res.json()})
  //.then((data)=>{setPosts(data)})
  //})

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/write">
            <Write
              title={title}
              setTitle={setTitle}
              contents={contents}
              setContents={setContents}
              setList={setList}
            />
          </Route>
          <Route path="/list">
            <List list={list} />
          </Route>
          <Route path="/single/:id">
            <Single
              list={list}
              setCurrentId={setCurrentId}
              deleteDetail={deleteDetail}
              title={title}
              contents={contents}
              setTitle={setTitle}
              setContents={setContents}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

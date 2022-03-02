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

  const deleteDetail = (e) => {
    if (window.confirm("삭제할건가용?"))
      Axios.delete("http://localhost:3001/api/delete/", {
        data: currentId,
      });
    window.location.replace("/list");
  };
  const update = () => {
    Axios.put("http://localhost:3001/api/update", {
      title: title,
      contents: contents,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setList(response.data);
    });
  }, []);

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
              update={update}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

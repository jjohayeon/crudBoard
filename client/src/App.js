import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header";
import { styled, createGlobalStyle } from "styled-components";
import Main from "./pages/Main";
import Write from "./pages/Write";
import List from "./pages/List";

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
            />
          </Route>
          <Route path="/list">
            <List list={list} setList={setList} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

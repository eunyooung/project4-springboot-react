import React, {Fragment} from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import TodoTemplate from "./components/todo/TodoTemplate";
import Home from "./Home";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <Router>
        <Fragment>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route path={"/todo/list"} element={<TodoTemplate/>}/>
            </Routes>
            <GlobalStyle/>
        </Fragment>
    </Router>
  );
}

export default App;

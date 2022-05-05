import React, {Component, Fragment, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HomeBlock = styled.div`
  
  height: 100vh;
  display: flex;
  align-items: center; /* 수직 정렬 */
  justify-content: center; /* flex direction에 대해서 정렬방식 선택 */
  
  .go {
    background-color: white;
    padding: 150px 100px;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    text-align: center;
    justify-content: center;
  }
  
  .link {
    text-decoration-line: none;
    color: #282c34;
    font-size: 24px;
  }
`;

function Home() {
    return (
        <HomeBlock>
            <NavLink className={"link"} to={"/todo/list"}>
                <div className={"go"}><b>ToDo List Start</b></div>
            </NavLink>
        </HomeBlock>
    );
}
export default Home;
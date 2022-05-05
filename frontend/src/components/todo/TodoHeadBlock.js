import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 30px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  
  /* 드래그 금지 */
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  
  h1 {
    margin: 0px;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead(props) {
    return (
        <TodoHeadBlock>
            <h1>{props.todoDate}</h1>
            <div className={"day"}>{props.todoDay}</div>
            <div className={"tasks-left"}>할 일 {props.todoLeft}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
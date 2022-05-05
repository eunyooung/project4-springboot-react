import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
`;

function TodoList({todoList, empty, list}) {
    let html = "";
    if (empty === false) {
        html = todoList.map((todo) => (
            <TodoItem key={todo.no} no={todo.no} text={todo.content} done={todo.done === 0 ? false : true} list={list}/>
        ))
    }

    return (
        <TodoListBlock>
            {html}
        </TodoListBlock>
    );
}

export default TodoList;
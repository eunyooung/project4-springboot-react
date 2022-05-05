import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import TodoHead from "./TodoHeadBlock";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const TodoTemplateBlock = styled.div `
  width: 512px;
  height: 768px;
  
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  
  margin: 0 auto;
  
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  
  .arrowBox {
    text-align: center;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .arrow {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    font-size: 24px;
    color: #7D7D7D;
    cursor: pointer;
  }
`;

function TodoTemplate() {
    const [todoDate, setTodoDate] = useState(""); // 년월일
    const [todoDay, setTodoDay] = useState("");   // 요일
    const [todoLeft, setTodoLeft] = useState(""); // 남은 할일 개수
    const [empty, setEmpty] = useState(false);    // todoList가 비어있는지 확인하는 용
    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/todo",{
            params:{
                date:null,
                move:0
            }
        }).then(res=>{
            setTodoDate(res.data[0].date)
            setTodoDay(res.data[0].day)
            setTodoLeft(res.data[0].left)
            setEmpty(res.data[0].empty)
            setTodoList(res.data)
        })
    },[])

    const list = (move)=>{
        axios.get("http://localhost:8080/todo",{
            params:{
                date:todoDate,
                move:move
            }
        }).then(res=>{
            setTodoDate(res.data[0].date)
            setTodoDay(res.data[0].day)
            setTodoLeft(res.data[0].left)
            setEmpty(res.data[0].empty)
            setTodoList(res.data)
        })
    }

    const prev = ()=>{
        list(-1)
    }

    const next = ()=>{
        list(1)
    }
    return (
        <TodoTemplateBlock>
            <div className={"arrowBox"}>
                <BsFillArrowLeftCircleFill onClick={prev} className={"arrow"}/>
                <BsFillArrowRightCircleFill onClick={next} className={"arrow"}/>
            </div>
            <TodoHead todoDate={todoDate} todoDay={todoDay} todoLeft={todoLeft}/>
            <TodoList todoList={todoList} empty={empty} list={list}/>
            <TodoCreate list={list} todoDate={todoDate}/>
        </TodoTemplateBlock>
    );
}

export default TodoTemplate;
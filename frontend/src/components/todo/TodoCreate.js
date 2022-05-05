import React, {Fragment, useState} from "react";
import axios from "axios";
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
 
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
 
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
 
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate({list, todoDate}) {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    const [content, setContent] = useState(false);

    const newTodo = (e)=>{
        e.preventDefault(); // 엔터시 새로고침 방지
        axios.post("http://localhost:8080/todo/add",null,{
            params:{
                content: content,
                todoDate: todoDate
            }
        }).then(res=>{
            list(0)
        })

    }
    const onChange = (e) => { // 값이 바뀔 때 마다 useState로 저장
        setContent(e.target.value)
    }
    return (
        <Fragment>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={newTodo}>
                        <Input onChange={onChange} autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </Fragment>
    );
}

export default TodoCreate;
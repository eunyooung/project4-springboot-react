package com.ey.web.service;

import java.util.*;

import org.springframework.data.repository.query.Param;

import com.ey.web.entity.*;

public interface TodoService {
    
    public List<TodoEntity> todoList(String todoDate);
    public int todoLeft(String regdate);
    public void updateTodo(int no, int done);
    public void addTodo(String content, String todoDate);
    public void deleteTodo(int no);
}
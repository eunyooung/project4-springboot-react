package com.ey.web.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.ey.web.dao.*;
import com.ey.web.entity.*;

@Service
public class TodoServiceImpl implements TodoService{
    
    @Autowired
    private TodoDAO dao;
    
    public List<TodoEntity> todoList(String todoDate) {
        return dao.todoList(todoDate.replace("-", ""));
    }
    
    public int todoLeft(String regdate) {
        return dao.todoLeft(regdate);
    }
    
    public void updateTodo(int no, int done) {
        dao.updateTodo(no, done);
    }
    
    public void addTodo(String content, String todoDate) {
        dao.addTodo(content, todoDate);
    }
    
    public void deleteTodo(int no) {
        dao.deleteById(no);
    }
}
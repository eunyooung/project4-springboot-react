package com.ey.web.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ey.web.service.*;
import com.ey.web.entity.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class MainController {
    
    @Autowired
    private TodoService service;
    
    @GetMapping("/todo")
    public String todo(String date, int move) {
        
        String day = "";
        int left = 0;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        
        System.out.println(date);
        
        if (date == null) {
            LocalDate now = LocalDate.now();
            
            date = now.format(formatter);
            day = now.getDayOfWeek().toString();
        } else {
            String[] temp = date.split("-");
            LocalDate newDate = LocalDate.of(Integer.valueOf(temp[0]), Integer.valueOf(temp[1]), Integer.valueOf(temp[2]));
            if (move == -1) {
                date = newDate.minusDays(1).format(formatter);
                newDate = newDate.minusDays(1);
            } else if (move == 1) {
                date = newDate.plusDays(1).format(formatter);
                newDate = newDate.plusDays(1);
            }
            day = newDate.getDayOfWeek().toString();
        }
        
        String date2 = date.replace("-", "");
        left = service.todoLeft(date2);
        List<TodoEntity> list = service.todoList(date2);
        System.out.println(day);
        
        JSONArray arr = new JSONArray();
        if (list.size() == 0) {
            JSONObject obj = new JSONObject();
            obj.put("date", date);
            obj.put("day", day);
            obj.put("left", left);
            obj.put("empty", true);
            arr.add(obj);
        } else {
            for (int i = 0; i < list.size(); i++) {
                JSONObject obj = new JSONObject();
                if (i == 0) {
                    obj.put("date", date);
                    obj.put("day", day);
                    obj.put("left", left);
                    obj.put("empty", false);
                }
                
                obj.put("no", list.get(i).getNo());
                obj.put("content", list.get(i).getContent());
                obj.put("done",  list.get(i).getDone());
                arr.add(obj);
            }
        }
        
        return arr.toJSONString();
    }
    
    @PostMapping("/todo/update")
    public String todo_update_done(int no, int done) {
        
        service.updateTodo(no, done);
        
        return "done";
    }
    
    @PostMapping("/todo/add")
    public String todo_add(String content, String todoDate) {
        
        service.addTodo(content, todoDate);
        
        return "done";
    }
    
    @PostMapping("/todo/delete")
    public String delete(int no) {
        
        service.deleteTodo(no);
        
        return "done";
    }
}
package com.ey.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity(name = "todo")
@Setter
@Getter
public class TodoEntity {
    
    @Id
    int no;
    int done;
    String content;
    String regdate;
}

package com.ey.web.dao;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ey.web.entity.*;

@Repository
public interface TodoDAO extends JpaRepository<TodoEntity, Integer> {
    
    @Query(value = "SELECT * "
            + "FROM todo WHERE regdate=STR_TO_DATE(:regdate, '%Y%m%d') ORDER BY no", nativeQuery = true)
    public List<TodoEntity> todoList(String regdate);
    
    @Query(value = "SELECT count(*) "
            + "FROM todo WHERE regdate=STR_TO_DATE(:regdate, '%Y%m%d') AND done=0", nativeQuery = true)
    public int todoLeft(String regdate);
    
    @Transactional
    @Modifying
    @Query(value = "UPDATE todo "
            + "SET done=:done WHERE no=:no", nativeQuery = true)
    public void updateTodo(@Param("no") Integer no, @Param("done") Integer done);
    
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO todo(content,regdate) VALUES(:content,:regdate)", nativeQuery = true)
    public void addTodo(@Param("content") String content, @Param("regdate") String regdate);
}
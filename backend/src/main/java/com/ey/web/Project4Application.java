package com.ey.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.ey.web.controller", "com.ey.web.dao", "com.ey.web.service"})
public class Project4Application {

	public static void main(String[] args) {
		SpringApplication.run(Project4Application.class, args);
	}

}
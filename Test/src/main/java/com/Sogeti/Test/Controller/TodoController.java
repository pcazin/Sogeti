package com.Sogeti.Test.Controller;

import com.Sogeti.Test.Entity.Todo;
import com.Sogeti.Test.Service.TodoServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoController {

    private TodoServiceImpl service;

    public TodoController() {
        this.service = new TodoServiceImpl();
    }

    @GetMapping("/all")
    public ResponseEntity<List<Todo>> all() {
        return ResponseEntity.ok().body(service.findAll());
    }

}
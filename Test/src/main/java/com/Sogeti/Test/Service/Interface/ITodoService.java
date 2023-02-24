package com.Sogeti.Test.Service.Interface;

import com.Sogeti.Test.Entity.Todo;

import java.util.List;

public interface ITodoService {
    List<Todo> findAll();
    List<Todo> done(Todo todo);
    List<Todo> delete(Todo todo);
    Todo getById(String id);
    List<Todo> add(Todo todo);
}

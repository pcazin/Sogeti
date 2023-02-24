package com.Sogeti.Test.Service.Interface;

import com.Sogeti.Test.Entity.Todo;

import java.util.List;

public interface ITodoService {
    List<Todo> findAll();
}

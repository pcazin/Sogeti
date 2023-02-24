package com.Sogeti.Test.Service;

import com.Sogeti.Test.Entity.Todo;
import com.Sogeti.Test.Repository.TodoRepository;
import com.Sogeti.Test.Service.Interface.ITodoService;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TodoServiceImpl implements ITodoService {

    TodoRepository repo;

    public TodoServiceImpl() {
        this.repo = new TodoRepository();
    }

    @Override
    public List<Todo> findAll() {
        return repo.findAll();
    }
}

package com.Sogeti.Test.Repository;

import com.Sogeti.Test.Entity.Todo;
import com.Sogeti.Test.Enum.TodoStateEnum;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class TodoRepository {

    List<Todo> todoList = new ArrayList<>(Arrays.asList(
            new Todo("Faire les courses", "pain, eau, viande, carottes, céréales pour les enfants, penser à acheter des pensements."),
            new Todo("Appeler mon client."),
            new Todo("Préparer le planning des vacances de noel.")
    ));

    public List<Todo> findAll() {
        return todoList;
    }

    public List<Todo> done(Todo todo) {
        for(Todo element: todoList ) {
            if(element.getId().equals(todo.getId())) {
                element.setState(TodoStateEnum.Done);
                int index = todoList.indexOf(element);
                todoList.remove(index);
                todoList.add(element);
                break;
            }
        }
        return todoList;
    }

    public List<Todo> delete(Todo todo) {
        for(int i = 0; i < todoList.size(); i++) {
            if(todoList.get(i).getId().equals(todo.getId())) {
                System.out.println(i);
                todoList.remove(i);
            }
        }
        return todoList;
    }

    public Todo getById(String id) {
        for(Todo todo: todoList) {
            if(todo.getId().toString().equals(id)) {
                return todo;
            }
        }
        return null;
    }

    public List<Todo> add(Todo todo) {
        todoList.add(0, todo);
        return todoList;
    }
}

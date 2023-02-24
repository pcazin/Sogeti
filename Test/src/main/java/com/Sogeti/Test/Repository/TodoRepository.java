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
            new Todo("Appeler mon client"),
            new Todo("Préparer le planning des vacances de noel.")
    ));

    public List<Todo> findAll() {
        return todoList;
    }
}

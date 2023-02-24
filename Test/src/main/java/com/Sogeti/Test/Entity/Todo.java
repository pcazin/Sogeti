package com.Sogeti.Test.Entity;

import com.Sogeti.Test.Enum.TodoStateEnum;
import jakarta.annotation.Nullable;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Todo {

    public Todo(String title) {
        this.title = title;
    }

    public Todo(String title, String description) {
        this.title = title;
        this.description = description;
    }

    UUID id = UUID.randomUUID();

    String title;
    @Nullable
    String description;
    TodoStateEnum state = TodoStateEnum.ToBeDone;

}

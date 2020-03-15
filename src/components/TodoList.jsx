import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoDelete, onMark }) => {
  return (
    <ul className="todo-list">
      {todos.map(todoItem => {
        return (
          <TodoItem
            item={todoItem}
            onTodoDelete={onTodoDelete}
            onMark={onMark}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

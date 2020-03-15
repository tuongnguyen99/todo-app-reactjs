import React from "react";

const TodoItem = ({ item, onTodoDelete, onMark }) => {
  return (
    <li class="todo-item">
      {item.isComplete ? (
        <i class="fas fa-check-circle color-success clickable"></i>
      ) : (
        <i class="far fa-circle"></i>
      )}

      <p>{item.content}</p>
      <i
        class={
          item.marked ? "far fa-star" : "fas fa-star color-warning clickable"
        }
        onClick={() => {
          onMark(item);
        }}
      ></i>
      <i
        class="fas fa-trash-alt color-danger clickable"
        onClick={() => {
          onTodoDelete(item);
        }}
      ></i>
    </li>
  );
};

export default TodoItem;

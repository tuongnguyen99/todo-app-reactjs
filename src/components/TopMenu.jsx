import React, { Component } from "react";
import TodoForm from "./TodoForm";

class TopMenu extends Component {
  render() {
    const { onTodoAdd } = this.props;
    return (
      <div className="top-menu">
        <div class="btn btn-sort">
          <i class="fas fa-sort-up"></i>
          Sort
        </div>
        <p>Importance</p>
        <TodoForm onTodoAdd={onTodoAdd} />
      </div>
    );
  }
}

export default TopMenu;

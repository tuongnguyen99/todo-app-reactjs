import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import TopMenu from "./TopMenu";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [
      {
        _id: 1,
        content: "Go to the super market!",
        isComplete: false,
        marked: false
      },
      {
        _id: 2,
        content: "Go to the super market!",
        isComplete: true,
        marked: true
      },
      {
        _id: 3,
        content: "Go to the super market!",
        isComplete: false,
        marked: false
      },
      {
        _id: 4,
        content: "Go to the super market!",
        isComplete: false,
        marked: false
      },
      {
        _id: 5,
        content: "Go to the super market!",
        isComplete: false,
        marked: false
      }
    ],
    category: [
      { _id: 1, name: "Importance" },
      { _id: 2, name: "Mark" },
      { _id: 3, name: "work" }
    ]
  };

  componentDidMount() {
    //get all todos from database and update state
  }

  handleTodoAdd = content => {
    const todos = [...this.state.todos];
    todos.push({ _id: "", content, isComplete: false });
    this.setState({ todos });
  };

  handleTodoDelete = todo => {
    const allTodos = [...this.state.todos];
    const todos = allTodos.filter(item => {
      return item._id !== todo._id;
    });
    this.setState({ todos });
  };

  handleMark = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index].marked = !todos[index].marked;
    this.setState({ todos });
  };

  render() {
    const { todos, category } = this.state;
    return (
      <div className="app">
        <div className="category">
          <CategoryForm />
          <CategoryList category={category} />
          <hr class="hr-slight" />
          <CategoryList category={category} />
        </div>
        <div className="main">
          <TopMenu onTodoAdd={this.handleTodoAdd} />
          <div className="content">
            <TodoList
              todos={todos}
              onTodoDelete={this.handleTodoDelete}
              onMark={this.handleMark}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    input: ""
  };

  doSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    this.props.onTodoAdd(input);
    this.setState({ input: "" });
  };

  onInputChange = ({ currentTarget }) => {
    const input = currentTarget.value;
    this.setState({ input });
  };
  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.doSubmit} class="todo-form d-flex-row-center">
        <input
          type="text"
          value={input}
          class="input-box"
          placeholder="New todo"
          onChange={this.onInputChange}
        />
        <button type="submit" class="clickable">
          <i class="fas fa-plus-square fa-2x"></i>
        </button>
      </form>
    );
  }
}

export default TodoForm;

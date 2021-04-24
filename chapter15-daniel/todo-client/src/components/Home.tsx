import React from "react";
import TodoFake from "../models/TodoFake";

export default class Home extends React.Component {
  render() {
    const todos = []
    for (const todo of TodoFake) {
      todos.push(<li key={todo.getId()}>{todo.getId()} - {todo.getMessage()}</li>)
    }
    return <div>
      Hello to the Todo App
      {todos}
    </div>;
  }
};

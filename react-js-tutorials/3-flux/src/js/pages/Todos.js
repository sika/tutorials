import React from "react";
import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions.js";
// todoStore imported from TodoStore
import TodoStore from "../stores/TodoStore.js";

export default class Featured extends React.Component {
  constructor() {
    console.log("Todos");
    // console.log(TodoStore);
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
}
componentWillMount(){
  TodoStore.on("change", ()=>{
    this.setState({
      todos: TodoStore.getAll(),
    });
  });
  console.log("count", TodoStore.listenerCount("change"));
}
createTodo(){
  console.log("Todos: createTodo");
  TodoActions.createTodo(Date.now());
}
deleteTodo(){
  console.log("Todos: deleteTodo");
  TodoActions.deleteTodo();
}

  render() {
    console.log("Todos render");
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
//{...todo} The properties of the object that you pass in are copied onto the component's props.
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create</button>
        <button onClick={this.deleteTodo.bind(this)}>Delete</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

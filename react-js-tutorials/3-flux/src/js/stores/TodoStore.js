import {EventEmitter} from "events";
// Needed to react to changes
//listen to dispatcher
import dispatcher from "../dispatcher.js";
class TodoStore extends EventEmitter{
  constructor(){
    super();
    this.todos =
    [
      {
        id: 1134654812,
        text: 'Go Shopping',
        complete: false
      },
      {
        id: 1134655112,
        text: 'Pay water Bills',
        complete: false
      }
    ];
  }
  createTodo(text){
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false,
    });
    this.emit("change"); //tell react to re-render components
  }
  deleteTodo(){
    this.todos.pop();
    this.emit("change"); //tell react to re-render components
  }

  getAll(){
    return this.todos;
  }
  handleActions(action){
      console.log("TodoStore: handleActions", action.type);
      switch(action.type){
        case "CREATE_TODO": {
          this.createTodo(action.text);
          break;
          // console.log(this);
        }
        case "DELETE_TODO": {
          this.deleteTodo();
          break;
          // console.log(this);
        }
      }
  }
}
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore)); //register listerner for dispatcher
// window.dispatcher = dispatcher;
export default todoStore;

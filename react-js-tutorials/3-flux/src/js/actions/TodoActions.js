import dispatcher from "../dispatcher.js";

export function createTodo(text){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(){
  dispatcher.dispatch({
    type: "DELETE_TODO",
  });
}

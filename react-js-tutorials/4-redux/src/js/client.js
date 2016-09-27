import {applyMiddleware, createStore} from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}

const reducer= (state=initialState, action) => {
  console.log("REDUCER");
  switch(action.type){

    case "FETCH_USERS_START" : {
      console.log("START");
      return {...state, fetching: true};
      break;
    }
    case "FETCH_USERS_ERROR" : {
      console.log("ERROR");
      return {...state, fetching: false, error: action.payload};
      break;
    }
    case "RECEIVE_USERS" : {
      console.log("USERS");
      return {...state, fetching: false, fetched: true, user: action.payload}; 
      break;
    }
  }
  console.log("END_REDUCER");
    return state;
};

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) =>{
  dispatch({type: "FETCH_USERS_START"});
  axios.get("http://rest.learncode.academy/api/wstern/users")
    .then((response) =>{
      dispatch({type: "RECEIVE_USERS", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: err})
    });
})

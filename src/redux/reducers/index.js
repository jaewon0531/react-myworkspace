import { combineReducers } from "redux";
import todo from "./todo-paging";
import contact from "./contact-paging";

const rootReducer = combineReducers({
  todo,
  contact,
});

export default rootReducer;
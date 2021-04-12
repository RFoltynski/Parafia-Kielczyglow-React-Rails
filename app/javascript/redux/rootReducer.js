import { combineReducers } from "redux";
import postReducer from "./posts/post.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
});

export default rootReducer;

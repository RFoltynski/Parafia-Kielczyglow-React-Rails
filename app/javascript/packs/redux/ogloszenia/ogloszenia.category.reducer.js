import { combineReducers } from "redux";
import { intentionsReducer } from "./subreducers/intentions/intentions.reducer";
import postReducer from "./subreducers/posts/post.reducer";
const ogloszeniaSubreducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
});

export default ogloszeniaSubreducer;

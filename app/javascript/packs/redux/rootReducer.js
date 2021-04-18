import { combineReducers } from "redux";
import postReducer from "./posts/post.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";
import proboszczReducer from "./duchowienstwo/proboszcz.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
  proboszcz: proboszczReducer,
});

export default rootReducer;

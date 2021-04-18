import { combineReducers } from "redux";
import postReducer from "./posts/post.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";
import proboszczReducer from "./duchowienstwo/proboszcz.reducer";
import wikariuszReducer from "./duchowienstwo/wikariusz.reducer";
import proboszczowieReducer from "./duchowienstwo/proboszczowie.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
  proboszcz: proboszczReducer,
  wikariusz: wikariuszReducer,
  proboszczowie: proboszczowieReducer,
});

export default rootReducer;

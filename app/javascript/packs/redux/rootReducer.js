import cmentarzSubreducer from "./cmentarz/cmentarz.category.reducer";
import { combineReducers } from "redux";
import duchowienstwoSubreducer from "./duchowienstwo/duchowienstwo.category.reducer";
import informacjeSubreducer from "./informacje/informacje.category.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";
import kontaktSubreducer from "./kontakt/kontakt.category.reducer";
import parafiaSubreducer from "./parafia/parafia.category.reducer";
import postReducer from "./posts/post.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
  duchowienstwo: duchowienstwoSubreducer,
  kontakt: kontaktSubreducer,
  parafia: parafiaSubreducer,
  informacje: informacjeSubreducer,
  cmentarz: cmentarzSubreducer,
});

export default rootReducer;

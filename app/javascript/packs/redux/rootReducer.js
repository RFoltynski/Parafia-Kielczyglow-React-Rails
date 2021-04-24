import cmentarzSubreducer from "./cmentarz/cmentarz.category.reducer";
import { combineReducers } from "redux";
import duchowienstwoSubreducer from "./duchowienstwo/duchowienstwo.category.reducer";
import historiaReducer from "./parafia/historiaParafi.reducer";
import informacjeSubreducer from "./informacje/informacje.category.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";
import kontaktSubreducer from "./kontakt/kontakt.category.reducer";
import miejscaReducer from "./parafia/miejsca.reducer";
import oPatronieReducer from "./parafia/oPatronie.reducer";
import obecnieReducer from "./parafia/obecnie.reducer";
import postReducer from "./posts/post.reducer";
import wspolnotyReducer from "./parafia/wspolnoty.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
  duchowienstwo: duchowienstwoSubreducer,
  kontakt: kontaktSubreducer,
  historia: historiaReducer,
  oPatronie: oPatronieReducer,
  miejsca: miejscaReducer,
  obecnie: obecnieReducer,
  informacje: informacjeSubreducer,
  wspolnoty: wspolnotyReducer,
  cmentarz: cmentarzSubreducer,
});

export default rootReducer;

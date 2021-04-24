import cmentarzSubreducer from "./cmentarz/cmentarz.category.reducer";
import { combineReducers } from "redux";
import danKontaktoweReducer from "./kontakt/daneKontaktowe.reducer";
import duchowienstwoSubreducer from "./duchowienstwo/duchowienstwo.category.reducer";
import historiaReducer from "./parafia/historiaParafi.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";
import miejscaReducer from "./parafia/miejsca.reducer";
import nabozenstwaReducer from "./informacje/nabozenstwa.reducer";
import oPatronieReducer from "./parafia/oPatronie.reducer";
import obecnieReducer from "./parafia/obecnie.reducer";
import postReducer from "./posts/post.reducer";
import sakramentyReducer from "./informacje/sakramenty.reducer";
import wspolnotyReducer from "./parafia/wspolnoty.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
  duchowienstwo: duchowienstwoSubreducer,
  daneKontaktowe: danKontaktoweReducer,
  historia: historiaReducer,
  oPatronie: oPatronieReducer,
  miejsca: miejscaReducer,
  obecnie: obecnieReducer,
  nabozenstwa: nabozenstwaReducer,
  sakramenty: sakramentyReducer,
  wspolnoty: wspolnotyReducer,
  cmentarz: cmentarzSubreducer,
});

export default rootReducer;

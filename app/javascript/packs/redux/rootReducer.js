import cmentarzSubreducer from "./cmentarz/cmentarz.category.reducer";
import { combineReducers } from "redux";
import danKontaktoweReducer from "./kontakt/daneKontaktowe.reducer";
import historiaReducer from "./parafia/historiaParafi.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";
import miejscaReducer from "./parafia/miejsca.reducer";
import nabozenstwaReducer from "./informacje/nabozenstwa.reducer";
import oPatronieReducer from "./parafia/oPatronie.reducer";
import obecnieReducer from "./parafia/obecnie.reducer";
import postReducer from "./posts/post.reducer";
import powolaniaReducer from "./duchowienstwo/powolania.reducer";
import proboszczReducer from "./duchowienstwo/proboszcz.reducer";
import proboszczowieReducer from "./duchowienstwo/proboszczowie.reducer";
import sakramentyReducer from "./informacje/sakramenty.reducer";
import wikariuszReducer from "./duchowienstwo/wikariusz.reducer";
import wspolnotyReducer from "./parafia/wspolnoty.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
  proboszcz: proboszczReducer,
  wikariusz: wikariuszReducer,
  proboszczowie: proboszczowieReducer,
  powolania: powolaniaReducer,
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

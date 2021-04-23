import { combineReducers } from "redux";
import historiaReducer from "./parafia/historiaParafi.reducer";
import infoReducer from "./daneKontaktowe/daneKontaktowe.reducer";
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
import wspolnoty from "./parafia/wspolnoty.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  intentions: intentionsReducer,
  proboszcz: proboszczReducer,
  wikariusz: wikariuszReducer,
  proboszczowie: proboszczowieReducer,
  powolania: powolaniaReducer,
  informacjeKontaktowe: infoReducer,
  historia: historiaReducer,
  oPatronie: oPatronieReducer,
  miejsca: miejscaReducer,
  obecnie: obecnieReducer,
  nabozenstwa: nabozenstwaReducer,
  sakramenty: sakramentyReducer,
  wspolnoty: wspolnoty,
});

export default rootReducer;

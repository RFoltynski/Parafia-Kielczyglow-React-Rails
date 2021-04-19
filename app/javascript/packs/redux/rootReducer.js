import { combineReducers } from "redux";
import postReducer from "./posts/post.reducer";
import { intentionsReducer } from "./intentions/intentions.reducer";
import proboszczReducer from "./duchowienstwo/proboszcz.reducer";
import wikariuszReducer from "./duchowienstwo/wikariusz.reducer";
import proboszczowieReducer from "./duchowienstwo/proboszczowie.reducer";
import powolaniaReducer from "./duchowienstwo/powolania.reducer";
import infoReducer from "./informacjeKontaktowe/informacjeKontaktowe.reducer";
import historiaReducer from "./parafia/historiaParafi.reducer";
import oPatronieReducer from "./parafia/oPatronie.reducer";
import miejscaReducer from "./parafia/miejsca.reducer";
import obecnieReducer from "./parafia/obecnie.reducer";

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
});

export default rootReducer;

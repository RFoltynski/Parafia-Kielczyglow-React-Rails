import { combineReducers } from "redux";
import historiaReducer from "./subreducers/historiaParafi.reducer";
import miejscaReducer from "./subreducers/miejsca.reducer";
import oPatronieReducer from "./subreducers/oPatronie.reducer";
import obecnieReducer from "./subreducers/obecnie.reducer";
import wspolnotyReducer from "./subreducers/wspolnoty.reducer";

const kontaktSubreducer = combineReducers({
  oPatronie: oPatronieReducer,
  miejsca: miejscaReducer,
  obecnie: obecnieReducer,
  wspolnoty: wspolnotyReducer,
  historia: historiaReducer,
});

export default kontaktSubreducer;

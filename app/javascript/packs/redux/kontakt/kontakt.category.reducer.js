import { combineReducers } from "redux";
import danKontaktoweReducer from "./subreducers/daneKontaktowe.reducer";
import formularzReducer from "./subreducers/formularz.reducer";

const kontaktSubreducer = combineReducers({
  daneKontaktowe: danKontaktoweReducer,
  formularz: formularzReducer,
});

export default kontaktSubreducer;

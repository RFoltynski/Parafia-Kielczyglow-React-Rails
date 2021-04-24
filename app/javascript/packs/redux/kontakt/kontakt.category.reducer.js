import { combineReducers } from "redux";
import danKontaktoweReducer from "./subreducers/daneKontaktowe.reducer";

const kontaktSubreducer = combineReducers({
  daneKontaktowe: danKontaktoweReducer,
});

export default kontaktSubreducer;

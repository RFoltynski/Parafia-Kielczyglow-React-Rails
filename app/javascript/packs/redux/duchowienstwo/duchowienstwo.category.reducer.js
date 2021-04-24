import { combineReducers } from "redux";
import powolaniaReducer from "./subreducers/powolania.reducer";
import proboszczReducer from "./subreducers/proboszcz.reducer";
import proboszczowieReducer from "./subreducers/proboszczowie.reducer";
import wikariuszReducer from "./subreducers/wikariusz.reducer";

const duchowienstwoSubreducer = combineReducers({
  proboszczowie: proboszczowieReducer,
  wikariusz: wikariuszReducer,
  powolania: powolaniaReducer,
  proboszcz: proboszczReducer,
});

export default duchowienstwoSubreducer;

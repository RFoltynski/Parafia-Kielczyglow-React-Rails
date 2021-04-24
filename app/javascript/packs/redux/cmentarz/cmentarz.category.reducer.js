import cmentarzReducer from "./subreducers/cmentarz.reducer";
import { combineReducers } from "redux";
import kaplicaReducer from "./subreducers/kaplica.reducer";
import pogrzebyReducer from "./subreducers/pogrzeby.reducer";

const cmentarzSubreducer = combineReducers({
  kaplica: kaplicaReducer,
  cmentarz: cmentarzReducer,
  pogrzeby: pogrzebyReducer,
});

export default cmentarzSubreducer;

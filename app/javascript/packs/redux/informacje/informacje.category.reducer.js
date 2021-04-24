import { combineReducers } from "redux";
import nabozenstwaReducer from "./subreducers/nabozenstwa.reducer";
import sakramentyReducer from "./subreducers/sakramenty.reducer";

const informacjeSubreducer = combineReducers({
  sakramenty: sakramentyReducer,
  nabozenstwa: nabozenstwaReducer,
});

export default informacjeSubreducer;

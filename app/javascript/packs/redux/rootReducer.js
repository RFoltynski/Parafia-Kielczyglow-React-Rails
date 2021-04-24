import cmentarzSubreducer from "./cmentarz/cmentarz.category.reducer";
import { combineReducers } from "redux";
import duchowienstwoSubreducer from "./duchowienstwo/duchowienstwo.category.reducer";
import informacjeSubreducer from "./informacje/informacje.category.reducer";
import kontaktSubreducer from "./kontakt/kontakt.category.reducer";
import ogloszeniaSubreducer from "./ogloszenia/ogloszenia.category.reducer";
import parafiaSubreducer from "./parafia/parafia.category.reducer";

const rootReducer = combineReducers({
  duchowienstwo: duchowienstwoSubreducer,
  kontakt: kontaktSubreducer,
  parafia: parafiaSubreducer,
  informacje: informacjeSubreducer,
  cmentarz: cmentarzSubreducer,
  ogloszenia: ogloszeniaSubreducer,
});

export default rootReducer;

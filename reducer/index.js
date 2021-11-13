import { combineReducers } from "redux";

import mealReducer from "./meals";
import filterReducer from "./filters";

const rootreducers = combineReducers({
  meal: mealReducer,
  filters: filterReducer,
});

export default rootreducers;

import { combineReducers } from "redux";

import { coinsReducer } from "./coins/reducers";

export default combineReducers({
  coins: coinsReducer
});

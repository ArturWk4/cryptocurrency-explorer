import { createReducer } from "@reduxjs/toolkit";
import {
  FETCH_COINS,
  FETCH_LIST_OF_COINS_TITLE,
  SET_ORDER
} from "./actionTypes";
import { GECKO_ORDER } from "../../utils/constants";

const initialState = {
  coinsList: [],
  listOfCoinsTitle: [],
  order: GECKO_ORDER[0].value
};

const coinsReducer = createReducer(initialState, {
  [FETCH_COINS]: (state, action) => ({ ...state, coinsList: action.payload }),
  [FETCH_LIST_OF_COINS_TITLE]: (state, action) => ({
    ...state,
    listOfCoinsTitle: action.payload
  }),
  [SET_ORDER]: (state, action) => ({ ...state, order: action.payload })
});

export default coinsReducer;

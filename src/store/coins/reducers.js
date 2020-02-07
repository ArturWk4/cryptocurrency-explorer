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

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return {
        ...state,
        coinsList: action.payload
      };
    case FETCH_LIST_OF_COINS_TITLE:
      return {
        ...state,
        listOfCoinsTitle: action.payload
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};

export { coinsReducer };

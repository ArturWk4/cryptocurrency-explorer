import {
  FETCH_COINS,
  FETCH_LIST_OF_COINS_TITLE,
  SET_ORDER
} from "./actionTypes";

import { listCoins, getAllCoinsTitle } from "../../services/coinService";

const setCoinsList = page => async (dispatch, getState) => {
  const response = await listCoins(page, getState().coins.order);
  dispatch({ type: FETCH_COINS, payload: response.data });
};

const setListOfCoinsTitle = () => async dispatch => {
  const response = await getAllCoinsTitle();
  dispatch({ type: FETCH_LIST_OF_COINS_TITLE, payload: response.data });
};

const setOrder = order => ({ type: SET_ORDER, payload: order });

export { setCoinsList, setListOfCoinsTitle, setOrder };
